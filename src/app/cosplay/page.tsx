"use client";

import { useState } from "react";
import Hexagon from "../components/Hexagon/Hexagon";
import { Cosplay } from "../models/Cosplay";
import styles from "./styles.module.css";
import Panel from "../components/Panel/Panel.module";
import useComponentVisible from "../hooks/useComponentVisible";
import BackLink from "../components/BackLink/BackLink";
import Menu from "../components/Menu/Menu";

export default function Page() {
  const [selectedCosplay, setSelectedCosplay] = useState<Cosplay | undefined>(
    undefined,
  );

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const onSelect = (id: number) => {
    setSelectedCosplay(cosplays.find((c) => c.id === id));
    setIsComponentVisible(true);
  };

  const cosplays: Cosplay[] = [
    {
      id: 1,
      name: "Lulu",
      sauce: "LoL",
      image: "lulu.png",
      bgColor: "#6297e5",
      accentColor: "#83BDE0",
      onSelectCosplay: onSelect,
      text: [
        "Lulu is a yordle from the League of Legends universe. This particular version is her winter wonder skin.",
      ],
    },
    {
      id: 2,
      name: "San",
      sauce: "Studio Ghibli",
      image: "san.png",
      bgColor: "#db6e62",
      accentColor: "#A13B3B",
      onSelectCosplay: onSelect,
      text: [
        "San is from my favourite Ghibli movie of all time, Princess Mononoke. This particular version is a redesign by the supremely talented artist, Hannah Alexander.",
      ],
    },
    {
      id: 3,
      name: "Riven",
      sauce: "LoL",
      image: "riven.png",
      bgColor: "#5db77c",
      accentColor: "#508E86",
      onSelectCosplay: onSelect,
      text: [
        "Riven is from League of Legends, I cosplayed her arcade skin. Admittedly not a champion I excel at, however I loved the bright colours and aesthetic of the skin.",
      ],
    },
    {
      id: 4,
      name: "Jester",
      sauce: "Critical Role",
      image: "jester.png",
      bgColor: "#7a93d3",
      accentColor: "#ADC2F1",
      onSelectCosplay: onSelect,
      text: [
        "Jester is my favourite chaotic little blue tiefling, played by Laura Bailey in campaign two of Critical role.",
      ],
    },
    {
      id: 5,
      name: "Pike",
      sauce: "Critical Role",
      image: "pike.png",
      bgColor: "#83bde0",
      accentColor: "#6297e5",
      onSelectCosplay: onSelect,
      text: [
        "Pike Trickfoot is a gnome cleric played by the incomparable Ashley Johnson in campaign one of Critical Role. She was my first forray into cosplay armour and a massive learning curve.",
      ],
    },
    {
      id: 6,
      name: "Fearne",
      sauce: "Critical Role",
      image: "fearne.png",
      bgColor: "#7D9E4C",
      accentColor: "#D9AD89",
      onSelectCosplay: onSelect,
      text: [
        "Fearne Calloway is a faun druid who first appeared in Exandria Unlimited and later became part of campaign three of Critical Role. She is created and played by the amazing Ashley Johnson.",
        "As soon as I saw her stunning design and chaotic energy I knew I would cosplay her. My little plant hoarding goblin soul could not resist. However I wasn't sure if my cosplay skills were up for it. And so, I did what I do best, procrastinated.",
      ],
    },
    {
      id: 7,
      name: "Nyx",
      sauce: "Hades",
      image: "nyx.png",
      bgColor: "#9271c4",
      accentColor: "#CAA75F",
      onSelectCosplay: onSelect,
      text: [
        "Nyx, mother night. From one ofmy favourite games, Hades. I love the game art style and Nyx's design is *chef's kiss*. The armour was super fun to make, with the shoulders feeling alot like a jigsaw puzzle to get all the pieces working together.",
      ],
    },
    {
      id: 8,
      name: "Laudna",
      sauce: "Critical Role",
      bgColor: "#ce5656",
      onSelectCosplay: onSelect,
      text: ["My favourite fun scary witch, Laudna!"],
    },
    {
      id: 9,
      name: "Orym",
      sauce: "Critical Role",
      bgColor: "#62a656",
      onSelectCosplay: onSelect,
      text: ["Sad boi"],
    },
  ];

  const smallSpacers = [2, 3, 5, 6, 8, 9, 11, 12];
  const mediumSpacers = [4, 7, 11, 14];

  const spacerClassName = (index: number) => {
    if (smallSpacers.includes(index)) {
      return "spacer block md:hidden";
    }
    if (mediumSpacers.includes(index)) {
      return "spacer hidden md:block";
    }
    return "hidden";
  };

  return (
    <main className={styles.container}>
      <style>{"body { background-color: var(--color-cosplay);}"}</style>
      <BackLink bgColor="mint" color="green" />
      <Menu currentPage="cosplay" bgColor="mint" color="green" />
      <section className="mx-auto h-screen justify-center mt-14 z-10">
        {cosplays?.map((cosplay, index) => {
          return (
            <span key={index}>
              <div className={spacerClassName(index)} />
              <Hexagon {...cosplay}></Hexagon>
            </span>
          );
        })}
      </section>
      <Panel
        ref={ref}
        setIsComponentVisible={setIsComponentVisible}
        isComponentVisible={isComponentVisible}
        cosplay={selectedCosplay}
      />
    </main>
  );
}
