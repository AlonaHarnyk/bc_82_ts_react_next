import type { Tab } from "../../types/tabs";
import Button from "../Button/Button";

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  return (
    <ul>
      {tabs.map(({ clickHandler, textContent }) => {
        return (
          <li key={textContent}>
            <Button handleClick={clickHandler} textContent={textContent} />
          </li>
        );
      })}
    </ul>
  );
}
