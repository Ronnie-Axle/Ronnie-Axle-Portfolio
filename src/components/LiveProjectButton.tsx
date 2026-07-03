interface LiveProjectButtonProps {
  href?: string;
}

export default function LiveProjectButton({ href = '#' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base whitespace-nowrap hover:bg-[#D7E2EA]/10 transition-colors duration-200"
    >
      Live Project
    </a>
  );
}
