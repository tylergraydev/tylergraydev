import * as motion from "motion/react-client";

export interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
}

export default function SlideIn({
  children,
  direction,
  duration,
}: SlideInProps) {
  const initialPosition =
    direction === "left"
      ? -100
      : direction === "right"
      ? 100
      : direction === "up"
      ? 100
      : -100;
  const exitPosition =
    direction === "left"
      ? -100
      : direction === "right"
      ? 100
      : direction === "up"
      ? -100
      : 100;
  const initialOpacity = 0;
  const exitOpacity = 0;
  const finalOpacity = 1;
  const transitionDuration = duration || 0.5;
  const transition = {
    duration: transitionDuration,
  };
  const viewport = {
    once: true,
  };
  const initial = {
    x: initialPosition,
    opacity: initialOpacity,
  };
  const whileInView = {
    x: 0,
    opacity: finalOpacity,
  };
  const exit = {
    x: exitPosition,
    opacity: exitOpacity,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      exit={exit}
      transition={transition}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
