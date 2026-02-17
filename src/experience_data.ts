import type { ExperienceItem } from "./models/experience_item";

export const experience_items: ExperienceItem[] = [
  {
    title: "Digital Twin",
    company: "Antea Group",
    body: "Digital Twin prototype ontwikkeld als afstudeerproject voor Antea Group. Voor deze opdracht heb ik met verschillende gemeentes interviews gehouden om mogelijke oplossingsrightingen vast te leggen. Vervolgens heb ik een prototype ontwikkeld waarmee o.a. gemeentes meer participatie bij hun projecten kunnen creeren door beslissingen aan de hand van data uit te leggen aan omwonenden.",
    technologies: ["React", "Vue", "ArcGIS"],
    thumbnail_image: "/src/assets/images/logo-antea-300x200-1-2456341760.png",
  },
  {
    title: "Home Task Manager",
    company: "Hanzehogeschool",
    body: "Tool voor het beheren dagelijkse taken die er in een houshouden gedaan moeten worden. Zo kan je bijvoorbeeld zien of de kat al eten heeft gekregen. Deze tool bestond uit een Java (spring boot) backend met een Angular frontend en een Android applicatie.",
    technologies: ["Vue", "Spring Boot", "Android"],
    thumbnail_image: "/src/assets/images/400x600.svg",
  },
  {
    title: "Disposable Discounter",
    company: "Mountain IT",
    links: ["https://www.disposablediscounter.com/"],
    body: "Gewerkt aan de webshop voor Disposable Discounter. Onder andere gewerkt aan de productpagina volgens het nieuwe ontwerp.",
    technologies: ["PHP", "Magento"],
  },
  {
    title: "PeterPrint",
    links: ["https://www.peterprint.nl/"],
    company: "Mountain IT",
    body: "",
    technologies: ["PHP", "Magento"],
  },
  {
    title: "DWCPrint",
    links: ["https://www.dwcprint.nl/"],
    company: "AndCode",
    body: "",
    technologies: ["PHP", "Magento"],
  },
  {
    title: "Horeca Goedkoop",
    links: ["https://www.horecagoedkoop.nl/"],
    company: "Mountain IT",
    body: "",
    technologies: ["PHP", "Magento"],
  },
  {
    title: "All-Inn Verspreidingen",
    links: ["https://verspreidingen.nl/"],
    company: "AndCode",
    body: "",
    technologies: ["PHP", "Laravel"],
  },
  {
    title: "CodeGorilla coaching",
    links: ["https://www.codegorilla.nl/"],
    company: "CodeGorilla",
    body: "",
    technologies: ["PHP", "Laravel", "Angular"],
  },
  {
    title: "Fudura Energie Monitoring",
    company: "AndCode",
    body: "Energiemonitoringtool voor vastgoedbeheerders, woningcorporaties en adviesbureaus.",
    technologies: ["PHP", "Laravel", "Angular"],
  },
  {
    title: "AR Board Games",
    company: "NHL Hogeschool",
    body: "",
    technologies: ["Unity", "C#"],
  },
  {
    title: "Game Jam Projecten",
    body: "",
    technologies: ["Unity", "Godot", "C#"],
  },
];
