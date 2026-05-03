"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  amount?: number;
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance,
  once = true,
  amount = 0.2,
}: FadeInProps) {
  const offset = directionOffset[direction];
  const moveDistance = distance ?? (direction === "none" ? 0 : 40);
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: offset.x ? offset.x * (moveDistance / 40) : 0,
        y: offset.y ? offset.y * (moveDistance / 40) : 0,
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
      }}
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

// Preset components for common use cases
export function FadeInUp(props: Omit<FadeInProps, "direction">) {
  return <FadeIn {...props} direction="up" />;
}

export function FadeInDown(props: Omit<FadeInProps, "direction">) {
  return <FadeIn {...props} direction="down" />;
}

export function FadeInLeft(props: Omit<FadeInProps, "direction">) {
  return <FadeIn {...props} direction="left" />;
}

export function FadeInRight(props: Omit<FadeInProps, "direction">) {
  return <FadeIn {...props} direction="right" />;
}

export function FadeInOnly(props: Omit<FadeInProps, "direction">) {
  return <FadeIn {...props} direction="none" distance={0} />;
}
