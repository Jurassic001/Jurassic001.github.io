// ─── Resume Data Type Definitions ───

export interface Basics {
  name: string;
  label: string;
  email: string;
  phone?: string;
  website: string;
  location: string;
  image: string;
  avatarUrl: string;
  profiles: Profile[];
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  tags: string[];
  link?: string;
  category: "leadership" | "work";
}

export interface ProjectEntry {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  outcomes: string[];
  featured: boolean;
  image?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  honors: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface ResumeData {
  basics: Basics;
  summary: string;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  skills: SkillCategory[];
  awards: Award[];
}
