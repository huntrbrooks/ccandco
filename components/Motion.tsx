"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "subtle";
};

const fadeInVariants = {
  default: { distance: 18, duration: 0.6 },
  subtle: { distance: 10, duration: 0.45 },
};

const subscribeToHydration = () => () => {};
const getHydratedSnapshot = () => true;
const getServerSnapshot = () => false;

export function FadeIn({
  children,
  className,
  delay = 0,
  variant = "default",
}: MotionProps) {
  const settings = fadeInVariants[variant];
  const shouldReduceMotion = useReducedMotion();
  const hasHydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydratedSnapshot,
    getServerSnapshot,
  );

  if (!hasHydrated || shouldReduceMotion) {
    return (
      <div className={className} data-motion="fade-in">
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      data-motion="fade-in"
      initial={{ opacity: 0, y: settings.distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: settings.duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
