import { FaNodeJs } from "react-icons/fa";
import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const TEHNOLOGIES_LIST = [
  {
    name: "Front-end tehnologies",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="tehnologyIcon" /> },
      { name: "Typescript", icon: <SiTypescript className="tehnologyIcon" /> },
      { name: "ReactJS", icon: <SiReact className="tehnologyIcon" /> },
      { name: "NextJS", icon: <TbBrandNextjs className="tehnologyIcon" /> },
      { name: "HTML5", icon: <SiHtml5 className="tehnologyIcon" /> },
      { name: "CSS", icon: <SiCss3 className="tehnologyIcon" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="tehnologyIcon" /> },
      { name: "REST API", icon: <SiJson className="tehnologyIcon" /> },
      { name: "GraphQL", icon: <SiGraphql className="tehnologyIcon" /> },
    ],
  },
  {
    name: "Back-end tehnologies",
    skills: [
      { name: "NodeJS", icon: <FaNodeJs className="tehnologyIcon" /> },
      { name: "Express", icon: <SiExpress className="tehnologyIcon" /> },
      { name: "NestJS", icon: <SiNestjs className="tehnologyIcon" /> },
      { name: "Python", icon: <SiPython className="tehnologyIcon" /> },
      { name: "Postman", icon: <SiPostman className="tehnologyIcon" /> },
    ],
  },
  {
    name: "Databases & ORMs",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="tehnologyIcon" /> },
      { name: "MySQL", icon: <SiMysql className="tehnologyIcon" /> },
      { name: "MongoDB", icon: <SiMongodb className="tehnologyIcon" /> },
      { name: "Prisma", icon: <SiPrisma className="tehnologyIcon" /> },
    ],
  },
  {
    name: "Deployment & CI/CD",
    skills: [
      { name: "GitHub", icon: <SiGithub className="tehnologyIcon" /> },
      { name: "Vercel", icon: <SiVercel className="tehnologyIcon" /> },
      { name: "AWS", icon: <SiAmazonaws className="tehnologyIcon" /> },
      { name: "Docker", icon: <SiDocker className="tehnologyIcon" /> },
    ],
  },
  {
    name: "Native Mobile Apps",
    skills: [
      { name: "React Native", icon: <SiReact className="tehnologyIcon" /> },
      { name: "Expo", icon: <SiExpo className="tehnologyIcon" /> },
    ],
  },
];
