import allInnImg from "@/assets/images/all-inn-verspreidingen-page.png";
import anteaImg from "@/assets/images/antea-group-logo.png";
import arbImg from "@/assets/images/close-up-screenshot.png";
import codegorillaImg from "@/assets/images/codegorilla-logo.png";
import didiImg from "@/assets/images/disposable-discounter-page.png";
import dwcImg from "@/assets/images/dwcprint-page.png";
import fuduraImg from "@/assets/images/fudura-page.png";
import homeTaskImg from "@/assets/images/home-task-manager-screens.png";
import horecagoedkoopImg from "@/assets/images/horecagoedkoop-page.png";
import javaLogoImg from "@/assets/images/java-logo.png";
import peterprintImg from "@/assets/images/peterprint-page.png";
import portfolioImg from "@/assets/images/portfolio-screenshot.png";
import itchGameImg from "@/assets/images/stay-b-positive-screenshot.png";
import type { Project } from "@/models/project";
import { ref } from "vue";

export const projectData: Project[] = [
  {
    title: "Digital Twin",
    company: "Antea Group",
    body: "Digital Twin prototype ontwikkeld als afstudeerproject voor Antea Group. Voor deze opdracht heb ik met verschillende gemeentes interviews gehouden om mogelijke oplossingsrichtingen vast te stellen. Vervolgens heb ik een prototype ontwikkeld waarmee projectmanagers meer participatie bij hun projecten kunnen genereren. Een van de manieren waarmee dit gedaan werd was door omgevingsdata toegankelijker te maken voor omwonenden zodat gemaakte keuzes hieraan uitgelegd kunnen worden.",
    technologies: ["React", "Vue", "ArcGIS", "JavaScript"],
    thumbnailImage: anteaImg,
  },
  {
    title: "Portfolio",
    body: "Deze website",
    technologies: ["Vue", "JavaScript"],
    source: "https://github.com/Jcuperus/portfolio",
    thumbnailImage: portfolioImg,
  },
  {
    title: "Java HTTP Server",
    body: "Een simpele server die gebaseerd is op de HTTP specificatie",
    technologies: ["Java"],
    source: "https://github.com/Jcuperus/HttpServerJava",
    thumbnailImage: javaLogoImg,
  },
  // {
  //   title: "Move Your Mind",
  //   company: "Hanzehogeschool",
  //   body: "Samenwerking met studenten van de Windesheim hogeschool. Systeem waarmee therapeuten gegevens in kunnen zien van hun patienten en deze kunnen helpen met het vinden van een gezondere levensstijl. Hierbij was mijn projectgroep verantwoordelijk voor het ontwikkelen van een API die de data van de fitbits van de patienten moest verwerken. Deze API is ontwikkeld in C# met het .NET framework.",
  //   technologies: ["C#", ".NET Core"],
  //   thumbnailImage: "/src/assets/images/400x600.svg",
  // },
  {
    title: "Home Task Manager",
    company: "Hanzehogeschool",
    body: "Tool voor het beheren van dagelijkse taken die er in een huishouden gedaan moeten worden. Zo kan je bijvoorbeeld zien of een ander familielid de kat al eten heeft gegeven. Deze tool bestond uit een Java (spring boot) backend met een Angular frontend en een Android applicatie.",
    technologies: ["Vue", "JavaScript", "Spring Boot", "Android", "Java"],
    thumbnailImage: homeTaskImg,
    source: "https://github.com/Jcuperus/home-task-manager-frontend",
  },
  {
    title: "Disposable Discounter",
    company: "Mountain IT",
    link: "https://www.disposablediscounter.com/",
    body: "Magentowebshop voor Disposable Discounter in samenwerking met E-Tales. Zelf heb ik bijvoorbeeld bijgedragen aan verschillende onderdelen op de productpagina en het kiezen van de correcte verpakkingsdozen voor een bestelling.",
    technologies: ["PHP", "Magento", "JavaScript"],
    thumbnailImage: didiImg,
  },
  {
    title: "PeterPrint",
    link: "https://www.peterprint.nl/",
    company: "Mountain IT",
    body: "Webshop voor drukkerij PeterPrint",
    technologies: ["PHP", "Magento", "JavaScript"],
    thumbnailImage: peterprintImg,
  },
  {
    title: "DWCPrint",
    link: "https://www.dwcprint.nl/",
    company: "AndCode",
    body: "Webshop voor drukkerij DWCPrint",
    technologies: ["PHP", "Magento", "JavaScript"],
    thumbnailImage: dwcImg,
  },
  {
    title: "Horeca Goedkoop",
    link: "https://www.horecagoedkoop.nl/",
    company: "Mountain IT",
    body: "Webshop voor drankengroothandel Horeca Goedkoop",
    technologies: ["PHP", "Magento", "JavaScript"],
    thumbnailImage: horecagoedkoopImg,
  },
  {
    title: "All-Inn Verspreidingen",
    link: "https://verspreidingen.nl/",
    company: "AndCode",
    body: "Meegewerkt aan het overzetten van de originele PHP webapplicatie naar een Laravel applicatie",
    technologies: ["PHP", "Laravel", "JavaScript"],
    thumbnailImage: allInnImg,
  },
  {
    title: "CodeGorilla coaching",
    link: "https://www.codegorilla.nl/",
    company: "CodeGorilla",
    body: "Meegewerkt aan een IT bootcamp voor mensen die langdurig in een werkloosheidssituatie zitten. Hierbij heb ik mensen begeleid en les gegeven in web development (o.a. PHP, Laravel en JavaScript).",
    technologies: ["PHP", "Laravel", "Angular", "Vue", "JavaScript"],
    thumbnailImage: codegorillaImg,
  },
  {
    title: "Fudura Energie Monitoring",
    company: "AndCode",
    body: "Energiemonitoringtool voor vastgoedbeheerders, woningcorporaties en adviesbureaus.",
    technologies: ["PHP", "Laravel", "Angular", "JavaScript"],
    thumbnailImage: fuduraImg,
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
    thumbnailImage: arbImg,
  },
  {
    title: "Game Jam Projecten",
    body: "Projecten waar ik tijdens verschillende game jams aan gewerkt heb. Ik was hierbij meestal verantwoordelijk voor design en programmeren.",
    technologies: ["Unity", "Godot", "C#"],
    link: "https://zyzamo.itch.io/",
    thumbnailImage: itchGameImg,
  },
];

/**
 * Queries an experience item based on title, body, technologies and company fields
 *
 * @param item ExperienceItem to be queried
 * @param query query string
 * @returns boolean indicating whether a match is found
 */
function matchItem(item: Project, query: string): boolean {
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

export function useProjects() {
  const projects = ref(projectData);

  const filter = (query?: string) => {
    if (!query || query === "") {
      projects.value = projectData;
    } else {
      projects.value = projectData.filter((item) => matchItem(item, query));
    }
  };

  return { projects, filter };
}
