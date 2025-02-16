"use client"

import Menu from '../components/Menu/Menu';
import { Typewriter } from '../components/Typewriter/Typewriter';
import styles from './styles.module.css'

export default function Page() {
  const toDo = [
    "walking my pup", 
    "making silly websites", 
    "cosplaying", 
    "squashing (software) bugs", 
    "hot gluing my fingers", 
    "making fetch happen", 
    "drawing cute things", 
    "trying experimental recipes", 
    "dreaming of whimsy"
  ];

    return <main 
      className={`h-dvh w-dvh ${styles.main} overflow-hidden top-0`}>
        {/* <div className="cloud fixed top-0 left-0 w-full h-3/4">
          <div className={`${styles.cloud} ${styles.one} left-1/4 top-1/4 opacity-80`}></div>
          <div className={`${styles.cloud} ${styles.two} left-1/3 top-1/3 opacity-65`}></div>
          <div className={`${styles.cloud} ${styles.three} left-1/2 top-1/2 opacity-90`}></div>
          <div className={`${styles.cloud} ${styles.four} left-2/3 top-1/4 opacity-50`}></div>
          <div className={`${styles.cloud} ${styles.five} left-3/4 top-1/3 opacity-75`}></div>
        </div> */}

      <Menu currentPage='hello' color='sky' />
      <section className="content-center mx-auto md:my-0 flex h-screen w-screen flex-col items-start justify-center text-white">
          <h1 className="text-2xl md:text-5xl mx-4">
            Hi, my <span>name is <span className="text-purple">Jess</span></span>
          </h1>
          <p className="mt-2 md:mt-4 md:text-lg font-semibold md:text-paper mx-4">
            A software developer based in the UK with over 10 years of experience making cool stuff.
          </p>
          <div className="mt-2 md:mt-4 md:text-lg font-semibold md:text-paper mx-4">
            I spend my freetime <Typewriter words={toDo} />
          </div>
      </section>
    </main>
}
