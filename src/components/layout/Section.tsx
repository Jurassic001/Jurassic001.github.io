import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../utils/cn";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
  fullHeight = false,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "px-4 sm:px-6",
        fullHeight ? "flex min-h-screen items-center" : "py-20 lg:py-24",
        className
      )}
    >
      <motion.div
        className="mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {title && (
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg text-[var(--color-text-secondary)]">
                {subtitle}
              </p>
            )}
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-500" />
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
