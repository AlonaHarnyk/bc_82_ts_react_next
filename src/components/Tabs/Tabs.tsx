import type { Tab } from "../../types/tabs";
import Button from "../Button/Button";
import css from "./Tabs.module.css";

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  return (
    <ul>
      {tabs.map(({ clickHandler, textContent, isActive }) => {
        return (
          <li className={isActive ? css.activeTab : css.tab} key={textContent}>
            <Button handleClick={clickHandler} textContent={textContent} />
          </li>
        );
      })}
    </ul>
  );
}
