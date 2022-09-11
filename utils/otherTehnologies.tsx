import { AiOutlineLineChart } from "react-icons/ai";
import { BsHexagonFill } from "react-icons/bs";
import { FaFileExcel, FaFilePowerpoint, FaFileWord } from "react-icons/fa";
import { ImPencil2 } from "react-icons/im";
import {
  SiBlender,
  SiFigma,
  SiGimp,
  SiGoogleads,
  SiGoogleanalytics,
  SiIbm,
} from "react-icons/si";
import { TbInfinity } from "react-icons/tb";

export const TEHNOLOGIES_LIST = [
  {
    name: "Digital Marketing",
    skills: [
      { name: "Google ADS", icon: <SiGoogleads className="tehnologyIcon" /> },
      {
        name: "Google Analytics",
        icon: <SiGoogleanalytics className="tehnologyIcon" />,
      },
      {
        name: "Meta Business",
        icon: <TbInfinity className="tehnologyIcon" />,
      },
      {
        name: "SEO Optimization",
        icon: <AiOutlineLineChart className="tehnologyIcon" />,
      },
    ],
  },
  {
    name: "Graphic Design",
    skills: [
      { name: "GIMP", icon: <SiGimp className="tehnologyIcon" /> },
      { name: "CorelDraw", icon: <ImPencil2 className="tehnologyIcon" /> },
      { name: "Blender", icon: <SiBlender className="tehnologyIcon" /> },
      { name: "Figma", icon: <SiFigma className="tehnologyIcon" /> },
    ],
  },
  {
    name: "Business Analysis",
    skills: [
      {
        name: "Bizagi Modeler",
        icon: <BsHexagonFill className="tehnologyIcon" />,
      },
      { name: "IBM WebSphere", icon: <SiIbm className="tehnologyIcon" /> },
    ],
  },
  {
    name: "Others",
    skills: [
      {
        name: "Word",
        icon: <FaFileWord className="tehnologyIcon" />,
      },
      {
        name: "Excel",
        icon: <FaFileExcel className="tehnologyIcon" />,
      },
      {
        name: "PowerPoint",
        icon: <FaFilePowerpoint className="tehnologyIcon" />,
      },
    ],
  },
];
