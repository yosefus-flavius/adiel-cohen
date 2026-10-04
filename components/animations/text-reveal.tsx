"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  once = true,
  as: Component = "div",
}: TextRevealProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once, amount: 0.8 }}
        transition={{ 
          duration, 
          delay, 
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        <Component className={className}>{children}</Component>
      </motion.div>
    </div>
  );
}

// Character-by-character reveal for headings
interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function CharacterReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
  once = true,
}: CharacterRevealProps) {
  const characters = text.split("");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.4,
                delay: delay + index * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Word-by-word reveal
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function WordReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.1,
  once = true,
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: "inline-block", overflow: "hidden" }}>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: "100%" },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: delay + index * staggerDelay,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
}
