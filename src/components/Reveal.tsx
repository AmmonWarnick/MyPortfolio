import { type CSSProperties, type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "zoom";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, e.g. 0.1 */
  delay?: number;
  variant?: RevealVariant;
}

const hiddenClass: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
  zoom: "opacity-0 scale-95",
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const style: CSSProperties = delay
    ? { transitionDelay: `${delay}s` }
    : {};

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none",
        isVisible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : hiddenClass[variant],
        className
      )}
    >
      {children}
    </div>
  );
};
