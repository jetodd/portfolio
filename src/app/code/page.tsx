import BackLink from "../components/BackLink/BackLink";
import CodeItem, { CodeItemProps } from "../components/CodeItem/CodeItem";
import Dice from "../components/Icons/Dice";
import Portfolio from "../components/Icons/Portfolio";
import Recipes from "../components/Icons/Recipes";
import Menu from "../components/Menu/Menu";

import styles from "./styles.module.css";

const items: CodeItemProps[] = [
  {
    title: "Portfolio",
    githubRepo: "portfolio",
    description:
      "The site that you are currently viewing. It is a showcase of my work and a playground for me to experiment with new technologies.",
    icon: <Portfolio />,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    siteUrl: "/",
  },
  {
    title: "Dicey",
    githubRepo: "dicey",
    description:
      "A fun little dice rolling app that I made for when people forget Dice and want to play RPG games.",
    icon: <Dice />,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    siteUrl: "https://github.com/jetodd/dicey",
  },
  {
    title: "Recipes",
    githubRepo: "recipes",
    description:
      "Keeps track of all the recipes that I like, what I'm cooking this week and what needs buying at the supermarket.",
    icon: <Recipes />,
    techStack: ["Django", "Python", "Tailwind CSS", "PostgreSQL"],
    siteUrl: "https://github.com/jetodd/recipes",
  },
]

export default function Page() {
  return (
    <main
      className="h-dvh w-full justify-center content-center"
      style={{ backgroundColor: "var(--color-code)" }}
    >
      <BackLink bgColor="sky-800" color="white" />
      <Menu currentPage="code" color="azure" />
      <section className="mx-auto -my-32 md:my-0 grid h-screen w-screen flex-col justify-center">
        <div className={styles.stack}>
          {items.map((item, index) => (
            <CodeItem index={index} total={items.length} key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
