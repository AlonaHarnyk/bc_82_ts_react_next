import { useState } from "react";
import type { Tab } from "../../types/tabs";
import Books from "../Books/Books";
import Tabs from "../Tabs/Tabs";
import Users from "../Users/Users";

type TabType = "users" | "books";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("users");

  const tabsConfig: Tab[] = [
    {
      textContent: "Users",
      clickHandler: () => {
        setActiveTab("users");
      },
    },
    {
      textContent: "Books",
      clickHandler: () => {
        setActiveTab("books");
      },
    },
  ];

  return (
    <>
      <Tabs tabs={tabsConfig} />
      {activeTab === "books" && <Books />}
      {activeTab === "users" && <Users />}
    </>
  );
}
