import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const CONTACT_EMAIL = "ronniemuworozi@gmail.com";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: { error?: string } = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("Thanks! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-[#141414] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/70">
              Let&apos;s build something great
            </p>
            <h2
              className="font-black uppercase leading-none text-white"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              Contact
            </h2>
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium tracking-[0.2em] text-white transition-opacity hover:opacity-80"
          >
            <Mail className="h-4 w-4" />
            {CONTACT_EMAIL}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-between gap-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#D7E2EA]/70">
                Availability
              </p>
              <p className="text-lg text-white md:text-xl">
                Open for product work, API builds, integrations, and backend
                architecture.
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#D7E2EA]/80">
              <p>Based in Kampala, Uganda, working worldwide.</p>
              <p>
                Prefer email first for project inquiries, partnerships, or quick
                technical discussions.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-white">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-white placeholder:text-[#D7E2EA]/40 focus:border-[#B600A8] focus:outline-none"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm font-medium text-white">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-white placeholder:text-[#D7E2EA]/40 focus:border-[#B600A8] focus:outline-none"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-white">
              Project details
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-white placeholder:text-[#D7E2EA]/40 focus:border-[#B600A8] focus:outline-none"
                placeholder="Tell me a little about your product, API, or the problem you want to solve..."
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
                style={{
                  background:
                    "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  boxShadow:
                    "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {status && (
                <p
                  className="text-sm text-[#D7E2EA]/80"
                  role="status"
                  aria-live="polite"
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
