"use client"

import { useState } from 'react';
import Hexagon from '../components/Hexagon/Hexagon'
import { ICosplay } from '../models/ICosplay'
import styles from './styles.module.css'
import Panel from '../components/Panel/Panel.module';
import useComponentVisible from '../hooks/useComponentVisible';

export default function Page() {
  const [selectedCosplay, setSelectedCosplay] = useState<ICosplay | undefined>(undefined);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const onSelect = (id: number) => {
    setSelectedCosplay(cosplays.find((c) => c.id === id));
    setIsComponentVisible(true)
  };

  const cosplays: ICosplay[] = [
    { id: 1, name: 'Lulu', sauce: 'League of Legends', image: 'lulu.jpg', bgColor: '#6297e5', text: [], onSelectCosplay: onSelect },
    { id: 2, name: 'San', sauce: 'Studio Ghibli', image: 'san.jpg', bgColor: '#db6e62', text: [], onSelectCosplay: onSelect },
    { id: 3, name: 'Riven', sauce: 'League of Legends', image: 'riven.jpg', bgColor: '#5db77c', text: [], onSelectCosplay: onSelect },
    { id: 4, name: 'Jester', sauce: 'Critical Role', image: 'jester.jpg', bgColor: '#7a93d3', text: [], onSelectCosplay: onSelect },
    { id: 5, name: 'Pike', sauce: 'Critical Role', image: 'pike.jpg', bgColor: '#83bde0', text: [], onSelectCosplay: onSelect },
    { id: 6, name: 'Fearne', sauce: 'Critical Role', image: 'fearne.jpg', bgColor: '#dba45c', text: [], onSelectCosplay: onSelect },
    { id: 7, name: 'Nyx', sauce: 'Hades', image: 'nyx.jpg', bgColor: '#a488cc', text: [], onSelectCosplay: onSelect }
  ]
  
    return <main className={styles.container}>
      <section className="mx-auto h-screen w-screen justify-center mt-4">
        {cosplays.map((cosplay, index) => {
          return <Hexagon key={index} {...cosplay}></Hexagon>;
        })}        
      </section>
      {selectedCosplay && <Panel 
        ref={ref}
        setIsComponentVisible={setIsComponentVisible}
        isComponentVisible={isComponentVisible} 
        {...selectedCosplay} />}
    </main>
}
