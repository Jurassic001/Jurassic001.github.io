import { Briefcase, ExternalLink, Rocket } from "lucide-react";
import resumeData from "../../data/resume";
import Section from "../layout/Section";
import Badge from "../ui/Badge";

export default function Experience() {
  const leadershipExp = resumeData.experience.filter(
    (e) => e.category === "leadership"
  );
  const workExp = resumeData.experience.filter((e) => e.category === "work");

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Leadership, projects, and professional roles"
    >
      {/* Leadership & Project Experience */}
      <div className="mb-16">
        <div className="mb-8 flex items-center gap-2 text-[var(--color-text-secondary)]">
          <Rocket size={18} />
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Leadership &amp; Projects
          </h3>
        </div>
        <div className="relative space-y-0">
          {/* Timeline line */}
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-[var(--color-border)]" aria-hidden="true" />

          {leadershipExp.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <div className="mb-8 flex items-center gap-2 text-[var(--color-text-secondary)]">
          <Briefcase size={18} />
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Work Experience
          </h3>
        </div>
        <div className="relative space-y-0">
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-[var(--color-border)]" aria-hidden="true" />

          {workExp.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function TimelineEntry({
  entry,
}: {
  entry: (typeof resumeData.experience)[number];
}) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Dot */}
      <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-[3px] border-brand-500 bg-[var(--color-bg)]" />

      {/* Header row */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">
          {entry.role}
        </h4>
        <span className="text-sm text-[var(--color-text-secondary)]">
          @ {entry.company}
        </span>
        {entry.link && (
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-brand-500 hover:underline"
            aria-label={`View ${entry.company} on GitHub`}
          >
            <ExternalLink size={12} />
            repo
          </a>
        )}
      </div>

      {/* Date */}
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
        {entry.startDate} - {entry.endDate}
      </p>

      {/* Bullets */}
      <ul className="mt-3 space-y-2">
        {entry.bullets.map((bullet, i) => (
          <li
            key={i}
            className="relative pl-4 text-sm leading-relaxed text-[var(--color-text-secondary)] before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-[var(--color-text-muted)]"
          >
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
