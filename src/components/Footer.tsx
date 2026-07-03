import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-white/10">
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-10 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Left: name / copyright */}
        <p className="text-sm text-[#D7E2EA] font-medium uppercase tracking-wider">
          © {new Date().getFullYear()} Ronnie Mwolozi— All rights reserved
        </p>

        {/* Right: social icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Ronnie-Axle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/ronnie-mwolozi-3b0a4b1b6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/ronnieaxle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="mailto:ronniemuworozi@gmail.com"
            aria-label="Email"
            className="text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
