import { useEffect, useState } from "react";

/**
 * Observes which section is currently in the viewport
 * and returns its ID for nav-highlight purposes.
 */
export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, IntersectionObserverEntry>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry) {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry);
            } else {
              visibleSections.delete(id);
            }

            // Pick the section closest to the top of the viewport
            let best: string | null = null;
            let bestTop = Infinity;
            visibleSections.forEach((e, sectionId) => {
              const top = e.boundingClientRect.top;
              if (Math.abs(top) < Math.abs(bestTop)) {
                bestTop = top;
                best = sectionId;
              }
            });

            if (best) setActiveId(best);
          }
        },
        {
          rootMargin: `-${offset}px 0px -40% 0px`,
          threshold: [0, 0.25, 0.5],
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, offset]);

  return activeId;
}
