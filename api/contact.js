const CONTACT_EMAIL = "ronniemuworozi@gmail.com";
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { name, email, message } = req.body || {};
  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  const cleanMessage = typeof message === "string" ? message.trim() : "";

  if (
    !cleanName ||
    cleanName.length > MAX_NAME_LENGTH ||
    !cleanEmail ||
    cleanEmail.length > MAX_EMAIL_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
    !cleanMessage ||
    cleanMessage.length > MAX_MESSAGE_LENGTH
  ) {
    return res.status(400).json({
      error: "Enter a valid name, email address, and message (up to 5000 characters).",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form is not configured: RESEND_API_KEY is missing.");
    return res.status(500).json({
      error: "The contact form is temporarily unavailable. Please email directly.",
    });
  }

  let resendResponse;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.RESEND_FROM_EMAIL ||
          "Ronnie Portfolio <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        reply_to: cleanEmail,
        subject: `Portfolio contact from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nProject details:\n${cleanMessage}`,
      }),
    });
  } catch (error) {
    console.error("Resend request failed:", error);
    return res.status(502).json({
      error: "Unable to send your message right now. Please try again.",
    });
  }

  if (!resendResponse.ok) {
    const errorDetails = await resendResponse.text();
    console.error(
      `Resend returned ${resendResponse.status}: ${errorDetails}`
    );
    return res.status(502).json({
      error: "Unable to send your message right now. Please try again.",
    });
  }

  return res.status(200).json({ message: "Message sent successfully." });
}
