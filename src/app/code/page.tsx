"use client";

import BackLink from "../components/BackLink/BackLink";
import CodeItem, { CodeItemProps } from "../components/CodeItem/CodeItem";
import Menu from "../components/Menu/Menu";

export default function Page() {
  const items: CodeItemProps[] = [
    {
      id: "a",
      title: "Portfolio",
      githubRepo: "portfolio",
      description:
        "The site that you are currently viewing. A showcase of my work and a playground for me to experiment.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      siteUrl: "https://portfolio-alpha-green-40.vercel.app/",
      bgColor: "#E1635E",
    },
    {
      id: "b",
      title: "Dicey",
      githubRepo: "dicey",
      description:
        "A fun little dice rolling app that I made for when people forget their dice but need to slay dragons.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      bgColor: "#E88A5D",
    },
    {
      id: "c",
      title: "Recipes",
      githubRepo: "recipes",
      description:
        "Keeps track of recipes that I like, planning for what I'm cooking this week and acts as a shopping list.",
      techStack: ["Django", "Python", "Tailwind CSS", "PostgreSQL"],
      bgColor: "#508E86",
    },
  ];

  return (
    <main>
      <style>{"body { background-color: #e5ddce;}"}</style>
      <BackLink bgColor="azure" color="white" />
      <Menu currentPage="code" bgColor="azure" color="white" />
      <section className="mx-auto h-screen justify-center mt-24">
        <div className="flex flex-wrap justify-center">
          {items.map((item) => (
            <CodeItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
