import { useState } from "react";
import type { Tab } from "../../types/tabs";
import Books from "../Books/Books";
import Tabs from "../Tabs/Tabs";
import Users from "../Users/Users";
import Contacts from "../Contacts/Contacts";

type TabType = "users" | "books" | "contacts";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("users");

  const tabsConfig: Tab[] = [
    {
      textContent: "Users",
      clickHandler: () => {
        setActiveTab("users");
      },
      isActive: activeTab === "users",
    },
    {
      textContent: "Books",
      clickHandler: () => {
        setActiveTab("books");
      },
      isActive: activeTab === "books",
    },
    {
      textContent: "Contacts",
      clickHandler: () => {
        setActiveTab("contacts");
      },
      isActive: activeTab === "contacts",
    },
  ];

  return (
    <>
      <Tabs tabs={tabsConfig} />
      {activeTab === "books" && <Books />}
      {activeTab === "users" && <Users />}
      {activeTab === "contacts" && <Contacts />}
    </>
  );
}
