import { ExternalLink, Github, Trophy } from "lucide-react";
import resumeData from "../../data/resume";
import Section from "../layout/Section";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Things I&rsquo;ve built and shipped"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {resumeData.projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                {project.name}
              </h3>
              <div className="flex shrink-0 gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub repository`}
                    className="rounded-md p-1.5 text-[var(--color-text-muted)] transition-colors hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live site`}
                    className="rounded-md p-1.5 text-[var(--color-text-muted)] transition-colors hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {project.description}
            </p>

            {/* Outcomes */}
            {project.outcomes.length > 0 && (
              <div className="mt-4 space-y-1.5">
                {project.outcomes.map((outcome, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm font-medium text-brand-500"
                  >
                    <Trophy size={14} className="shrink-0" />
                    {outcome}
                  </div>
                ))}
              </div>
            )}

            {/* Tech stack */}
            <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--color-border)] pt-4">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
