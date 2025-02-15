"use client"

import { useState } from 'react';
import Hexagon from '../components/Hexagon/Hexagon'
import { Cosplay } from '../models/Cosplay'
import styles from './styles.module.css'
import Panel from '../components/Panel/Panel.module';
import useComponentVisible from '../hooks/useComponentVisible';
import Link from 'next/link';
import BackLink from '../components/BackLink/BackLink';

export default function Page() {
  const [selectedCosplay, setSelectedCosplay] = useState<Cosplay | undefined>(undefined);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const onSelect = (id: number) => {
    setSelectedCosplay(cosplays.find((c) => c.id === id));
    setIsComponentVisible(true)
  };

  const cosplays: Cosplay[] = [
    { id: 1, name: 'Lulu', sauce: 'LoL', image: 'lulu.jpg', bgColor: '#6297e5', onSelectCosplay: onSelect,
      text: [
        "Lulu is a yordle from the League of Legends universe. This particular version is her winter wonder skin."
      ],
     },
    { id: 2, name: 'San', sauce: 'Studio Ghibli', image: 'san.jpg', bgColor: '#db6e62', onSelectCosplay: onSelect,
      text: [
        "San is from my favourite Ghibli movie of all time, Princess Mononoke. This particular version is a redesign by the supremely talented artist, Hannah Alexander."
      ], 
    },
    { id: 3, name: 'Riven', sauce: 'LoL', image: 'riven.jpg', bgColor: '#5db77c', onSelectCosplay: onSelect,
      text: [
        "Riven is from League of Legends, I cosplayed her arcade skin. Admittedly not a champion I excel at, however I loved the bright colours and aesthetic of the skin."
      ],
     },
    { id: 4, name: 'Jester', sauce: 'Critical Role', image: 'jester.jpg', bgColor: '#7a93d3', onSelectCosplay: onSelect,
      text: [
        "Jester is my favourite chaotic little blue tiefling, played by Laura Bailey in campaign two of Critical role."
      ],
    },
    { id: 5, name: 'Pike', sauce: 'Critical Role', image: 'pike.jpg', bgColor: '#83bde0', onSelectCosplay: onSelect,
      text: [
        "Pike Trickfoot is a gnome cleric played by the incomparable Ashley Johnson in campaign one of Critical Role. She was my first forray into cosplay armour and a massive learning curve."
      ]
    },
    { id: 6, name: 'Fearne', sauce: 'Critical Role', image: 'fearne.jpg', bgColor: '#dba45c', onSelectCosplay: onSelect,
      "text": [
        "Fearne Calloway is a faun druid who first appeared in Exandria Unlimited and later became part of campaign three of Critical Role. She is created and played by the amazing Ashley Johnson.",
        "As soon as I saw her stunning design and chaotic energy I knew I would cosplay her. My little plant hoarding goblin soul could not resist. However I wasn't sure if my cosplay skills were up for it. And so, I did what I do best, procrastinated."
     ]
    },
    { id: 7, name: 'Nyx', sauce: 'Hades', image: 'nyx.jpg', bgColor: '#a488cc', onSelectCosplay: onSelect,
      text: [
        "Nyx, mother night."
      ],
    },
    { id: 1, name: 'Lulu', sauce: 'LoL', image: 'lulu.jpg', bgColor: '#6297e5', onSelectCosplay: onSelect,
      text: [
        "Lulu is a yordle from the League of Legends universe. This particular version is her winter wonder skin."
      ],
     },
    { id: 2, name: 'San', sauce: 'Studio Ghibli', image: 'san.jpg', bgColor: '#db6e62', onSelectCosplay: onSelect,
      text: [
        "San is from my favourite Ghibli movie of all time, Princess Mononoke. This particular version is a redesign by the supremely talented artist, Hannah Alexander."
      ], 
    },
    { id: 3, name: 'Riven', sauce: 'LoL', image: 'riven.jpg', bgColor: '#5db77c', onSelectCosplay: onSelect,
      text: [
        "Riven is from League of Legends, I cosplayed her arcade skin. Admittedly not a champion I excel at, however I loved the bright colours and aesthetic of the skin."
      ],
     },
    { id: 4, name: 'Jester', sauce: 'Critical Role', image: 'jester.jpg', bgColor: '#7a93d3', onSelectCosplay: onSelect,
      text: [
        "Jester is my favourite chaotic little blue tiefling, played by Laura Bailey in campaign two of Critical role."
      ],
    },
    { id: 5, name: 'Pike', sauce: 'Critical Role', image: 'pike.jpg', bgColor: '#83bde0', onSelectCosplay: onSelect,
      text: [
        "Pike Trickfoot is a gnome cleric played by the incomparable Ashley Johnson in campaign one of Critical Role. She was my first forray into cosplay armour and a massive learning curve."
      ]
    },
    { id: 6, name: 'Fearne', sauce: 'Critical Role', image: 'fearne.jpg', bgColor: '#dba45c', onSelectCosplay: onSelect,
      "text": [
        "Fearne Calloway is a faun druid who first appeared in Exandria Unlimited and later became part of campaign three of Critical Role. She is created and played by the amazing Ashley Johnson.",
        "As soon as I saw her stunning design and chaotic energy I knew I would cosplay her. My little plant hoarding goblin soul could not resist. However I wasn't sure if my cosplay skills were up for it. And so, I did what I do best, procrastinated."
     ]
    },
    { id: 7, name: 'Nyx', sauce: 'Hades', image: 'nyx.jpg', bgColor: '#a488cc', onSelectCosplay: onSelect,
      text: [
        "Nyx, mother night."
      ],
    },
    
  ]
  
    return <main className={styles.container}>
      <BackLink />
      <section className="mx-auto h-screen justify-center mt-4">
        {cosplays.map((cosplay, index) => {
          return <Hexagon key={index} {...cosplay}></Hexagon>;
        })}        
      </section>
      <Panel 
        ref={ref}
        setIsComponentVisible={setIsComponentVisible}
        isComponentVisible={isComponentVisible} 
        cosplay={selectedCosplay} />
    </main>
}
