export interface Technology {
  name: string;
  icon: string;
}

export interface TechSkill {
  title: string;
  technologies: Technology[];
}