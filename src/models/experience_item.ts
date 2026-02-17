export type Technology =
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
  | "Unity"
  | "Godot";

export interface ExperienceItem {
  title: string;
  body: string;
  company?: string;
  links?: string[];
  thumbnail_image?: string;
  technologies: Technology[];
}
