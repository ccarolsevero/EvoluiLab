export function Logo({
  className = "",
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-baseline gap-1.5 ${className}`}
      aria-label="EvoluiLab — início"
    >
      <span className="font-display text-[1.35rem] font-semibold tracking-tight text-mist sm:text-[1.5rem]">
        evolui
      </span>
      <span className="relative font-display text-[0.95rem] font-medium tracking-tight text-teal sm:text-[1.05rem]">
        lab
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full bg-teal"
        />
      </span>
    </a>
  );
}
