import { v4 as uuidv4 } from "uuid";
import { NavigationInterface } from "../../types";
import NavigationListItems from "./NavigationListItems";

const NAVIGATION: NavigationInterface[] = [
  { id: uuidv4(), link: "/", name: "HOME" },
  { id: uuidv4(), link: "/about", name: "ABOUT" },
  { id: uuidv4(), link: "/skills", name: "SKILLS" },
  { id: uuidv4(), link: "/education", name: "EDUCATION" },
  { id: uuidv4(), link: "/expirience", name: "EXPIRIENCE" },
  { id: uuidv4(), link: "/work", name: "WORK" },
  { id: uuidv4(), link: "/blog", name: "BLOG" },
  { id: uuidv4(), link: "/contact", name: "CONTACT" },
];

const NavigationItems = () => {
  return (
    <nav>
      <ul className="font-semibold text-xl flex flex-col gap-6 items-center text-secondary-gray-400">
        {NAVIGATION.map((item) => (
          <NavigationListItems key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationItems;
