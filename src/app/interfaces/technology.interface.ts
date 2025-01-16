export interface Technology {
  name: string;
  icon: string;
  work?: string; 
}

export interface TechSkill {
  title: string;
  technologies: Technology[];
}