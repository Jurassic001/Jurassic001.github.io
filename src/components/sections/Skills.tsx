import resumeData from "../../data/resume";
import Section from "../layout/Section";
import Badge from "../ui/Badge";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies, tools, and capabilities"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {resumeData.skills.map((category) => (
          <div
            key={category.name}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
          >
            <h3 className="mb-4 text-base font-semibold text-[var(--color-text-primary)]">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
