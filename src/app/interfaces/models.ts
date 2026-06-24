import { Localized } from './i18n';

/** A technology / tool. `icon` is a brand asset; `bi` is a Bootstrap-icon fallback. */
export interface Technology {
  name: string;
  label: string;
  icon?: string;
  bi?: string;
}

export interface ProjectLink {
  label: Localized;
  url: string;
  /** Bootstrap-icon class, e.g. `bi-github`. */
  icon?: string;
}

export type ProjectContext = 'work' | 'freelance' | 'academic' | 'personal';

export interface Project {
  id: string;
  title: Localized;
  role: Localized;
  summary: Localized;
  highlights: Localized<string[]>;
  /** Screenshot/cover image. When absent, a generated cover with `coverIcon` is shown. */
  image?: string;
  /** Bootstrap-icon class used for the generated cover when there is no image. */
  coverIcon?: string;
  technologies: Technology[];
  links?: ProjectLink[];
  context: ProjectContext;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: Localized;
  company: string;
  period: Localized;
  location?: Localized;
  summary: Localized;
  highlights: Localized<string[]>;
  technologies: Technology[];
}

export interface EducationItem {
  id: string;
  degree: Localized;
  institution: string;
  period?: Localized;
  status?: Localized;
  detail?: Localized;
}

export interface SkillGroup {
  title: Localized;
  technologies: Technology[];
}

export interface SoftSkill {
  title: Localized;
  description: Localized;
  /** Bootstrap-icon class. */
  bi: string;
}
