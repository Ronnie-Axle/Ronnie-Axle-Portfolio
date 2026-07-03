import FadeIn from "./FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "API Development",
    description:
      "Designing and implementing robust, scalable, and secure Restful APIs that enable seamless communication between applications and services, ensuring efficient data exchange and integration.",
  },
  {
    number: "02",
    name: "Database Design & Management",
    description:
      "Designing and managing efficient, scalable, and secure relational database systems that support application functionality and data integrity.",
  },
  {
    number: "03",
    name: "Authentication & Security",
    description:
      "Implementing robust authentication and security measures, JWT, to protect applications and user data from unauthorized access and potential threats.",
  },
  {
    number: "04",
    name: "Server Architecture & Deployment",
    description:
      "Designing and implementing scalable server architectures and deployment strategies to ensure high availability, performance, and reliability of applications.",
  },
  {
    number: "05",
    name: "Third-Party Integrations",
    description:
      "Connecting apps to external services, payment gateways, email providers, cloud storage, or other APIs",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
