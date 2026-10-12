import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={`I'm Ronnie, a backend developer who enjoys building scalable and efficient systems that power great products, i started out exploring the frontend side of things, but i was found more drawn to the logic, data, architecture running underneath => APIs,databases, and making sure everything scales without falling over. I work mainly with FastAPI, MySQL focusing on clean, well structured code, and APIs that are easy for other developers to work with. What i enjoy most is solving how the "how does this actually work". Take alook at my projects, and if you've got something you're building, I'd love to help bring it to life.`}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />

          <a
            href="/Ronnie_Mwolozi_CV.pdf"
            download="Ronnie_Mwolozi_CV.pdf"
            className="inline-flex items-center justify-center rounded-full text-white font-medium tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base whitespace-nowrap transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow:
                "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid white",
              outlineOffset: "-3px",
              textDecoration: "none",
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
