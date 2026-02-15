import type { ExperienceItem } from "./models/experience_item";

export const experience_items: ExperienceItem[] = [
  {
    title: "Digital Twin",
    company: "Antea Group",
    body: "Digital Twin prototype ontwikkeld als afstudeerproject voor Antea Group. Voor deze opdracht heb ik met verschillende gemeentes interviews gehouden om mogelijke oplossingsrightingen vast te leggen. Vervolgens heb ik een prototype ontwikkeld waarmee o.a. gemeentes meer participatie bij hun projecten kunnen creeren door beslissingen aan de hand van data uit te leggen aan omwonenden.",
    technologies: ["react", "ArcGIS"],
  },
  {
    title: "Home Task Manager",
    company: "Hanzehogeschool",
    body: "Tool voor het beheren dagelijkse taken die er in een houshouden gedaan moeten worden. Zo kan je bijvoorbeeld zien of de kat al eten heeft gekregen. Deze tool bestond uit een Java (spring boot) backend met een Angular frontend en een Android applicatie.",
    technologies: ["vue", "spring boot", "android"],
  },
  {
    title: "Disposable Discounter",
    company: "Mountain IT",
    body: "Gewerkt aan de webshop voor Disposable Discounter. Onder andere gewerkt aan de productpagina volgens het nieuwe ontwerp.",
    technologies: ["PHP", "Magento"],
  },
];
