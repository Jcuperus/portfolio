export type Technology =
  | "JavaScript"
  | "React"
  | "Vue"
  | "Angular"
  | "ArcGIS"
  | "Java"
  | "Android"
  | "Spring Boot"
  | "PHP"
  | "Magento"
  | "Laravel"
  | "C#"
  | ".NET Core"
  | "Unity"
  | "Godot";

export interface ExperienceItem {
  title: string;
  body: string;
  company?: string;
  link?: string;
  source?: string;
  thumbnailImage?: string;
  technologies: Technology[];
}
