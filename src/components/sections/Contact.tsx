import { ArrowUpRight, Mail } from "lucide-react";
import resumeData from "../../data/resume";
import Section from "../layout/Section";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

export default function Contact() {
  const { email } = resumeData.basics;

  return (
    <Section id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let&rsquo;s Connect
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-500" />
        <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
          I&rsquo;m always open to discussing new projects, engineering challenges,
          or opportunities. Feel free to reach out!
        </p>

        <div className="mt-8 flex flex-col items-center gap-6">
          <Button
            href={`mailto:${email}`}
            variant="primary"
            size="lg"
          >
            <Mail size={18} />
            {email}
            <ArrowUpRight size={16} />
          </Button>
          <SocialLinks size={22} showLabels />
        </div>
      </div>
    </Section>
  );
}
