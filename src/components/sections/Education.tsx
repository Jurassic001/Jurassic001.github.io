import { Award, GraduationCap } from "lucide-react";
import resumeData from "../../data/resume";
import Section from "../layout/Section";
import Card from "../ui/Card";

export default function Education() {
  return (
    <Section id="education" title="Education &amp; Awards">
      {/* Education */}
      <div className="grid gap-6 md:grid-cols-2">
        {resumeData.education.map((edu) => (
          <Card key={edu.id} hover={false} className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-brand-500/10 p-2 text-brand-500">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text-primary)]">
                  {edu.institution}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {edu.degree}
                  {edu.field ? ` — ${edu.field}` : ""}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {edu.startDate} — {edu.endDate}
                </p>
              </div>
            </div>
            {edu.honors.length > 0 && (
              <ul className="ml-2 space-y-1.5 border-l-2 border-brand-500/20 pl-4">
                {edu.honors.map((honor) => (
                  <li
                    key={honor}
                    className="text-sm text-[var(--color-text-secondary)]"
                  >
                    {honor}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>

      {/* Awards */}
      {resumeData.awards.length > 0 && (
        <div className="mt-12">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[var(--color-text-primary)]">
            <Award size={20} className="text-brand-500" />
            Awards &amp; Recognition
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resumeData.awards.map((award) => (
              <Card
                key={award.title}
                hover={false}
                className="flex flex-col gap-2"
              >
                <h4 className="font-semibold text-[var(--color-text-primary)]">
                  {award.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {award.issuer} &middot; {award.date}
                </p>
                {award.description && (
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {award.description}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
