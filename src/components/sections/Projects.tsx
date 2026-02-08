import { ExternalLink, Github, Trophy } from "lucide-react";
import resumeData from "../../data/resume";
import Section from "../layout/Section";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

export default function Projects() {
  const featured = resumeData.projects.filter((p) => p.featured);
  const other = resumeData.projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Things I&rsquo;ve built and shipped"
    >
      {/* Featured projects — large cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
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

      {/* Other projects — smaller cards */}
      {other.length > 0 && (
        <>
          <h3 className="mt-12 mb-6 text-lg font-semibold text-[var(--color-text-primary)]">
            More Projects
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {other.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-[var(--color-text-primary)]">
                    {project.name}
                  </h4>
                  <div className="flex shrink-0 gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                        className="rounded-md p-1.5 text-[var(--color-text-muted)] transition-colors hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10"
                      >
                        <Github size={16} />
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
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
