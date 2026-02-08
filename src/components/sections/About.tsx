import resumeData from "../../data/resume";
import Section from "../layout/Section";

export default function About() {
  const { basics, summary } = resumeData;

  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* Avatar (secondary — shows GitHub avatar for variety) */}
        <div className="flex-shrink-0">
          <img
            src={basics.avatarUrl}
            alt={`${basics.name} avatar`}
            width={200}
            height={200}
            className="h-48 w-48 rounded-2xl border-2 border-[var(--color-border)] object-cover shadow-md"
            loading="lazy"
          />
        </div>

        {/* Bio text */}
        <div className="max-w-2xl space-y-5 text-center lg:text-left">
          <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
            {summary}
          </p>
          <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Currently pursuing a <strong className="text-[var(--color-text-primary)]">B.S. in Computer Engineering</strong> at{" "}
            <strong className="text-[var(--color-text-primary)]">Texas A&amp;M University</strong>, where I'm also an{" "}
            <strong className="text-[var(--color-text-primary)]">Avionics Engineer</strong> on the Sounding Rocketry Team — developing embedded systems for telemetry, onboard logic, and radar on high-powered rockets.
          </p>
          <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
            When I'm not building embedded systems or writing firmware, you'll find me working on open-source projects, experimenting with 3D printing, or tinkering with new development tools.
          </p>
        </div>
      </div>
    </Section>
  );
}
