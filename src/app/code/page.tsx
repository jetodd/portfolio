"use client"

import { useEffect, useState } from "react";
import BackLink from "../components/BackLink/BackLink";
import { CodeItemProps } from "../components/CodeItem/CodeItem";
import Menu from "../components/Menu/Menu";
import GitHub from "../components/Icons/GitHub";

export default function Page() {
  const [selectedItem, setSelectedItem] = useState<CodeItemProps | undefined>(undefined);

  const onSelect = (id: string) => {
    setSelectedItem(items.find((c) => c.id === id));
  };

  console.log('selectedItem', selectedItem);

  const items: CodeItemProps[] = [
    {
      id: "a",
      title: "Portfolio",
      githubRepo: "portfolio",
      description:
        "The site that you are currently viewing. A showcase of my work and a playground for me to experiment.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      siteUrl: "",
      bgColor: "#E1635E",
      onSelectItem: onSelect,
    },
    {
      id: "b",
      title: "Dicey",
      githubRepo: "dicey",
      description:
        "A fun little dice rolling app that I made for when people forget their dice but need to slay dragons.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      siteUrl: "https://github.com/jetodd/dicey",
      bgColor: "#E88A5D",
      onSelectItem: onSelect,
    },
    {
      id: "c",
      title: "Recipes",
      githubRepo: "recipes",
      description:
        "Keeps track of recipes that I like, planning for what I'm cooking this week and acts as a shopping list.",
      techStack: ["Django", "Python", "Tailwind CSS", "PostgreSQL"],
      siteUrl: "https://github.com/jetodd/recipes",
      bgColor: "#508E86",
      onSelectItem: onSelect,
    },
  ]

  useEffect(() => {
    onSelect(items[0].id);
  }, []);

  return (
    <main>
      <style>{'body { background-color: #e5ddce;}'}</style>
      <BackLink bgColor="azure" color="white" />
      <Menu currentPage="code" bgColor="azure" color="white" />
      <section className="mx-auto h-screen justify-center mt-24">
        <div className="flex flex-wrap justify-center">
          {items.map((item) => (
            <div key={item.id} className="xs:size-[100px] sm:size-[140px] md:size-[200px] flex flex-col rounded-lg mx-4 my-2 border-4 border-black text-black aspect-square" style={{ backgroundColor: item.bgColor }}>
              <div className="p-6 aspect-square content-center">
                  <a
                    title="View on GitHub"
                    target="_blank"
                    href={`https://github.com/jetodd/${item.githubRepo}`}>
                      <GitHub />
                  </a>
                  <h5 className="mb-2 text-xl font-medium text-center align-middle">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
