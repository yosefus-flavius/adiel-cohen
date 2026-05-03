"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  initialScale?: number;
  once?: boolean;
  amount?: number;
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  initialScale = 0.9,
  once = true,
  amount = 0.3,
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
