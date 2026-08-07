"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealTag = "div" | "li" | "section" | "article" | "p" | "ul" | "ol";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
};

const ease = [0.22, 1, 0.36, 1] as const;

const tags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  p: motion.p,
  ul: motion.ul,
  ol: motion.ol,
} as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = tags[as];

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease,
      }}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  stagger?: number;
  delay?: number;
};

export function Stagger({
  children,
  className = "",
  as = "div",
  stagger = 0.08,
  delay = 0.05,
}: StaggerProps) {
  const Tag = tags[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function StaggerItem({
  children,
  className = "",
  as = "div",
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  return (
    <Tag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease },
        },
      }}
    >
      {children}
    </Tag>
  );
}
