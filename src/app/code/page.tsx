"use client"

import { useEffect, useState } from "react";
import BackLink from "../components/BackLink/BackLink";
import CodeItem, { CodeItemProps } from "../components/CodeItem/CodeItem";
import Menu from "../components/Menu/Menu";
import GitHub from "../components/Icons/GitHub";

export default function Page() {
  const [selectedItem, setSelectedItem] = useState<CodeItemProps | undefined>(undefined);

  const onSelect = (id: string) => {
    setSelectedItem(items.find((c) => c.id === id));
  };

  const items: CodeItemProps[] = [
    {
      id: "a",
      title: "Portfolio",
      githubRepo: "portfolio",
      description:
        "The site that you are currently viewing. A showcase of my work and a playground for me to experiment.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      siteUrl: "",
      bgColor: "#505FD1",
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
      bgColor: "#4453cb",
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
      bgColor: "#3b4ccc",
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
      <Menu currentPage="code" bgColor="azure" color="bleu" />
      <section className="mx-auto h-screen justify-center mt-24">
        <div className={`grid grid-cols-3`}>
          {items.map((item, index) => (
            <CodeItem index={index} total={items.length} key={item.title} {...item} />
          ))}
        </div>
        <div className="px-4 pt-8" style={{ backgroundColor: `${selectedItem?.bgColor}` }}>
          <div className="mx-auto max-w-3xl">
            <span className="dark:text-white text-lg uppercase">{selectedItem?.title}</span>
            <p className="mb-3">{selectedItem?.description}</p>
            <div className="flex mb-3 gap-3">
            <a
              className="w-9"
              title="View on GitHub"
              target="_blank"
              href={`https://github.com/jetodd/${selectedItem?.githubRepo}`}>
                <GitHub />
            </a>
          </div>
          <div className="flex">
            {selectedItem?.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-gray-350 rounded-full bg-code px-2 py-1 mr-1">
                {tech}
              </span>
            ))}
          </div>
        </div>  
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill={`${selectedItem?.bgColor}`} fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,85.3C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </section>
    </main>
  );
}
