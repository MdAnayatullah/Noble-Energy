"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type AnimationDirection = "up" | "down" | "left" | "right";
type AnimationType = "fade" | "slide" | "scale";

interface UseScrollAnimationProps {
  direction?: AnimationDirection;
  type?: AnimationType;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation({
  direction = "up",
  type = "fade",
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: UseScrollAnimationProps = {}) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(20px)";
      case "down":
        return "translateY(-20px)";
      case "left":
        return "translateX(20px)";
      case "right":
        return "translateX(-20px)";
      default:
        return "translateY(20px)";
    }
  };

  const baseClasses = "transition-all duration-1000";
  const delayClass = delay ? `delay-[${delay}ms]` : "";
  const hiddenClasses = cn(
    baseClasses,
    delayClass,
    "opacity-0",
    type === "slide" && `transform ${getTransform()}`,
    type === "scale" && "transform scale-95"
  );
  const visibleClasses = cn(
    baseClasses,
    delayClass,
    "opacity-100 transform translate-x-0 translate-y-0 scale-100"
  );

  const className = cn(
    inView ? visibleClasses : hiddenClasses
  );

  return { ref, className, inView };
}