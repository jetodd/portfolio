"use client";

import BackLink from "../components/BackLink/BackLink";
import Menu from "../components/Menu/Menu";
import { Typewriter } from "../components/Typewriter/Typewriter";
import styles from "./styles.module.css";

export default function Page() {
  const toDo = [
    "walking my pup",
    "making silly websites",
    "cosplaying",
    "squashing (software) bugs",
    "hot gluing my fingers",
    "making fetch happen",
    "drawing cute things",
    "snacking",
    "trying experimental recipes",
    "dreaming of whimsy",
    "problem solving",
    "dungeoning and dragoning",
  ];

  const tech = [
    "C#",
    "HTML",
    "CSS",
    "Typescript",
    "Python",
    ".NET Core",
    "Angular",
    "React",
    "Tailwind CSS",
    "Azure",
    "Git",
    "Docker",
    "Kubernetes",
    "Terraform",
  ];

  return (
    <main className={`w-dvw h-full top-0 ${styles.main}`}>
      <style>{"body { background-color: var(--color-hello);}"}</style>

      <BackLink bgColor="rose" color="white" />
      <Menu currentPage="hello" bgColor="rose" color="white" />
      <section className="mx-10 md:my-0 flex flex-col text-white">
        <h1 className="text-4xl mx-2 mt-25 md:text-6xl md:mt-40">
          <span className="font-[Oliver]">Hi, my name is Jess.</span>
        </h1>
        <p className="mt-2 mx-2 md:mt-4 md:text-lg font-semibold md:text-paper">
          A creative software developer based in the UK with over 10 years of
          experience making cool stuff.
        </p>
        <img src="/pup.png" alt="My best boy and I" width="350px" />
        <div className="mt-2 mb-4 mx-2 md:mt-4 md:text-lg font-semibold md:text-paper">
          I spend my freetime <Typewriter words={toDo} />
        </div>

        <h3 className="text-2xl mb-2">
          <span className="font-[Oliver]">Tools & tech.</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
