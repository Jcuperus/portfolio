export type Technology =
  | "react"
  | "vue"
  | "angular"
  | "ArcGIS"
  | "java"
  | "android"
  | "spring boot"
  | "PHP"
  | "Magento"
  | "Laravel";

export interface ExperienceItem {
  title: string;
  body: string;
  company?: string;
  technologies: Technology[];
}
