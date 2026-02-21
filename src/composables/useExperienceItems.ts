import all_inn_img from "@/assets/images/all-inn-verspreidingen-page.png";
import antea_img from "@/assets/images/antea-group-logo.png";
import arb_img from "@/assets/images/close-up-screenshot.png";
import codegorilla_img from "@/assets/images/codegorilla-logo.png";
import didi_img from "@/assets/images/disposable-discounter-page.png";
import dwc_img from "@/assets/images/dwcprint-page.png";
import fudura_img from "@/assets/images/fudura-page.png";
import home_task_img from "@/assets/images/home-task-manager-screens.png";
import horecagoedkoop_img from "@/assets/images/horecagoedkoop-page.png";
import peterprint_img from "@/assets/images/peterprint-page.png";
import itch_game_img from "@/assets/images/stay-b-positive-screenshot.png";
import { ref } from "vue";

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
  thumbnail_image?: string;
  technologies: Technology[];
}

export const experience_data: ExperienceItem[] = [
  {
    title: "Digital Twin",
    company: "Antea Group",
    body: "Digital Twin prototype ontwikkeld als afstudeerproject voor Antea Group. Voor deze opdracht heb ik met verschillende gemeentes interviews gehouden om mogelijke oplossingsrightingen vast te leggen. Vervolgens heb ik een prototype ontwikkeld waarmee o.a. gemeentes meer participatie bij hun projecten kunnen creeren door beslissingen aan de hand van data uit te leggen aan omwonenden.",
    technologies: ["React", "Vue", "ArcGIS", "JavaScript"],
    thumbnail_image: antea_img,
  },
  {
    title: "Portfolio",
    body: "Deze website",
    technologies: ["Vue", "JavaScript"],
    source: "https://github.com/Jcuperus/portfolio",
  },
  {
    title: "Java HTTP Server",
    body: "Een simpele server die gebasseerd is op de HTTP spefificatie",
    technologies: ["Java"],
    source: "https://github.com/Jcuperus/HttpServerJava",
  },
  // {
  //   title: "Move Your Mind",
  //   company: "Hanzehogeschool",
  //   body: "Samenwerking met studenten van de Windesheim hogeschool. Systeem waarmee therapeuten gegevens in kunnen zien van hun patienten en deze kunnen helpen met het vinden van een gezondere levensstijl. Hierbij was mijn projectgroep verantwoordelijk voor het ontwikkelen van een API die de data van de fitbits van de patienten moest verwerken. Deze API is ontwikkeld in C# met het .NET framework.",
  //   technologies: ["C#", ".NET Core"],
  //   thumbnail_image: "/src/assets/images/400x600.svg",
  // },
  {
    title: "Home Task Manager",
    company: "Hanzehogeschool",
    body: "Tool voor het beheren dagelijkse taken die er in een houshouden gedaan moeten worden. Zo kan je bijvoorbeeld zien of de kat al eten heeft gekregen. Deze tool bestond uit een Java (spring boot) backend met een Angular frontend en een Android applicatie.",
    technologies: ["Vue", "JavaScript", "Spring Boot", "Android", "Java"],
    thumbnail_image: home_task_img,
    source: "https://github.com/Jcuperus/home-task-manager-frontend",
  },
  {
    title: "Disposable Discounter",
    company: "Mountain IT",
    link: "https://www.disposablediscounter.com/",
    body: "Gewerkt aan de webshop voor Disposable Discounter. Onder andere gewerkt aan de productpagina volgens het nieuwe ontwerp.",
    technologies: ["PHP", "Magento", "JavaScript"],
    thumbnail_image: didi_img,
  },
  {
    title: "PeterPrint",
    link: "https://www.peterprint.nl/",
    company: "Mountain IT",
    body: "",
    technologies: ["PHP", "Magento", "JavaScript"],
    thumbnail_image: peterprint_img,
  },
  {
    title: "DWCPrint",
    link: "https://www.dwcprint.nl/",
    company: "AndCode",
    body: "",
    technologies: ["PHP", "Magento", "JavaScript"],
    thumbnail_image: dwc_img,
  },
  {
    title: "Horeca Goedkoop",
    link: "https://www.horecagoedkoop.nl/",
    company: "Mountain IT",
    body: "",
    technologies: ["PHP", "Magento", "JavaScript"],
    thumbnail_image: horecagoedkoop_img,
  },
  {
    title: "All-Inn Verspreidingen",
    link: "https://verspreidingen.nl/",
    company: "AndCode",
    body: "",
    technologies: ["PHP", "Laravel", "JavaScript"],
    thumbnail_image: all_inn_img,
  },
  {
    title: "CodeGorilla coaching",
    link: "https://www.codegorilla.nl/",
    company: "CodeGorilla",
    body: "",
    technologies: ["PHP", "Laravel", "Angular", "Vue", "JavaScript"],
    thumbnail_image: codegorilla_img,
  },
  {
    title: "Fudura Energie Monitoring",
    company: "AndCode",
    body: "Energiemonitoringtool voor vastgoedbeheerders, woningcorporaties en adviesbureaus.",
    technologies: ["PHP", "Laravel", "Angular", "JavaScript"],
    thumbnail_image: fudura_img,
  },
  // {
  //   title: "Amsterdam Hotelmonitor?",
  //   company: "AndCode",
  //   body: "Hotelmonitor waarmee de hotels in de gemeente amsterdam in kaart worden gebracht",
  //   technologies: ["C#", "JavaScript"],
  // },
  {
    title: "AR Board Games",
    company: "NHL Hogeschool",
    body: "Samenwerking tussen de NHL en Critical Bit. De opdracht was on verschillende prototypes te ontwikkelen om concepten te vinden voor bordspellen die gebruik maken van AR (augmented reality). Deze heb ik ontwikkeld met de Unity game engine in combinatie met de AR library Vuforia. Een voorbeeld van deze prototypes was Close Up, een spel waarbij je zo snel mogelijk een karakter moet vinden in een 3D omgeving. Hierbij kan je het tegen mensen op je lokale netwerk opnemen om de meeste karakters te vinden.",
    technologies: ["Unity", "C#"],
    source: "https://github.com/Jcuperus/ARB-Close_Up",
    thumbnail_image: arb_img,
  },
  {
    title: "Game Jam Projecten",
    body: "",
    technologies: ["Unity", "Godot", "C#"],
    link: "https://zyzamo.itch.io/",
    thumbnail_image: itch_game_img,
  },
];

/**
 * Queries an experience item based on title, body, technologies and company fields
 *
 * @param item ExperienceItem to be queried
 * @param query query string
 * @returns boolean indicating whether a match is found
 */
function matchItem(item: ExperienceItem, query: string): boolean {
  const queryLower = query.toLowerCase();

  return (
    item.title.toLowerCase().includes(queryLower) ||
    item.body.toLowerCase().includes(queryLower) ||
    (item.company && item.company.toLowerCase().includes(queryLower)) ||
    item.technologies.some((technology) =>
      technology.toLowerCase().includes(queryLower),
    )
  );
}

export function useExperienceItems() {
  const experience_items = ref(experience_data);

  const filter = (query?: string) => {
    if (!query || query === "") {
      experience_items.value = experience_data;
    } else {
      experience_items.value = experience_data.filter((item) =>
        matchItem(item, query),
      );
    }
  };

  return { experience_items, filter };
}
