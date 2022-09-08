import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NavigationInterface } from "../../types";

interface NavigationListItemsProps {
  item: NavigationInterface;
}

const NavigationListItems: React.FC<NavigationListItemsProps> = ({ item }) => {
  const { route } = useRouter();
  const currentRouteStyle =
    "text-primary-blue-400 relative before:absolute before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-primary-blue-400 before:ease-in-out before:duration-300";

  return (
    <>
      <li
        className={`${
          route === item.link ? `${currentRouteStyle}` : "before:w-0"
        } hover:text-primary-blue-400`}
      >
        <Link href={item.link}>
          <a>{item.name}</a>
        </Link>
      </li>
    </>
  );
};

export default NavigationListItems;
