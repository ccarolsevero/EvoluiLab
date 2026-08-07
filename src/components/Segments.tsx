"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const segments: {
  label: string;
  href?: string;
  icon: ReactNode;
}[] = [
  {
    label: "Advogados",
    href: "/advogados",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v3M7 21h10M8.5 9l-3 6h5l-3-6zm7 0l-3 6h5l-3-6z" />
        <path d="M5 21V18a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      </svg>
    ),
  },
  {
    label: "Médicos",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4v16M8 8h8" />
        <rect x="9" y="11" width="6" height="9" rx="1" />
      </svg>
    ),
  },
  {
    label: "Dentistas",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 4c-2 0-3.5 2-3.5 4.5C4.5 13 7 16 8 20c.4-1.5 1-3 2-3s1.6 1.5 2 3c1-4 3.5-7 3.5-11.5C15.5 6 14 4 12 4c-1 0-1.5.5-2 1-.5-.5-1-1-2-1z" />
      </svg>
    ),
  },
  {
    label: "Psicólogos",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4c-3 2-5 5-5 8a5 5 0 0 0 10 0c0-3-2-6-5-8z" />
        <path d="M12 12v8" />
      </svg>
    ),
  },
  {
    label: "Nutricionistas",
    href: "/nutricionistas",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21c4-3 7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 3 8 7 11z" />
        <path d="M12 7v4" />
      </svg>
    ),
  },
  {
    label: "Arquitetos",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20h16M6 20V9l6-5 6 5v11" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
  },
  {
    label: "Consultores",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="3.5" />
        <path d="M15.5 15.5 20 20M14 11.5a4.5 4.5 0 0 1 4.5 4.5" />
      </svg>
    ),
  },
  {
    label: "Clínicas",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4v16M8 8h8M7 21h10" />
        <path d="M9 12h6v5H9z" />
      </svg>
    ),
  },
];

function SegmentItem({
  label,
  icon,
  href,
}: {
  label: string;
  icon: ReactNode;
  href?: string;
}) {
  const className =
    "group inline-flex items-center gap-2.5 text-mist/55 transition hover:text-mist";

  const content = (
    <>
      <span className="text-mist/35 transition group-hover:text-mist/70">{icon}</span>
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

export function Segments() {
  return (
    <section className="relative border-y border-white/6 bg-surface py-12 sm:py-14">
      <div className="section-pad">
        <div className="container-site">
          <Reveal >
            <p className="text-center font-display text-[0.7rem] font-medium tracking-[0.22em] text-mist/40 uppercase">
              Especialistas em sites para profissionais
            </p>
          </Reveal>
          <Stagger
            as="ul"
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-5"
            stagger={0.04}
          >
            {segments.map((item) => (
              <StaggerItem key={item.label} as="li">
                <SegmentItem {...item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
