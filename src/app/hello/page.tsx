"use client"

import BackLink from '../components/BackLink/BackLink';
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
      className={`h-dvh w-full ${styles.main} overflow-hidden top-0`}
      >
        {/* <div className="cloud fixed top-0 left-0 w-full h-3/4">
          <div className={`${styles.cloud} ${styles.one} left-1/4 top-1/4 opacity-80`}></div>
          <div className={`${styles.cloud} ${styles.two} left-1/3 top-1/3 opacity-65`}></div>
          <div className={`${styles.cloud} ${styles.three} left-1/2 top-1/2 opacity-90`}></div>
          <div className={`${styles.cloud} ${styles.four} left-2/3 top-1/4 opacity-50`}></div>
          <div className={`${styles.cloud} ${styles.five} left-3/4 top-1/3 opacity-75`}></div>
        </div> */}

      <BackLink bgColor='sky' color='black' />
      <Menu currentPage='hello' bgColor='sky' color='black' />
      <section className="mx-20 md:my-0 flex h-screen w-screen flex-col text-navy">
          <h1 className="text-4xl md:text-6xl mt-40">
            <span className='font-[Oliver]'>Hi, my name is Jess</span>
          </h1>
          <p className="mt-2 md:mt-4 md:text-lg font-semibold md:text-paper text-navy">
            A creative software developer based in the UK with over 10 years of experience making cool stuff.
          </p>
          <div className="mt-2 mb-4 md:mt-4 md:text-lg font-semibold md:text-paper text-navy">
            I spend my freetime <Typewriter words={toDo} />
          </div>

          <h2>Languages</h2>
          <ul className={`list-none mb-4 ${styles.tags}`}>
            <li className={`ml-0 mr-2 ${styles.tag}`}>C#</li>
            <li className={`mx-2 ${styles.tag}`}>HTML</li>
            <li className={`mx-2 ${styles.tag}`}>CSS</li>
            <li className={`mx-2 ${styles.tag}`}>JavaScript</li>
            <li className={`mx-2 ${styles.tag}`}>TypeScript</li>
            <li className={`mx-2 ${styles.tag}`}>Python</li>
          </ul>
          <h2>Frameworks & libraries</h2>
          <ul className={`list-none mb-4 ${styles.tags}`}>
            <li className={`ml-0 mr-2 ${styles.tag}`}>.NET Core</li>
            <li className={`mx-2 ${styles.tag}`}>Angular</li>
            <li className={`mx-2 ${styles.tag}`}>React</li>
            <li className={`mx-2 ${styles.tag}`}>Next.JS</li>
            <li className={`mx-2 ${styles.tag}`}>Tailwind CSS</li>
            <li className={`mx-2 ${styles.tag}`}>Django</li>
          </ul>
          <h2>Tools & technology</h2>
          <ul className={`list-none mb-4 ${styles.tags}`}>
            <li className={`ml-0 mr-2 ${styles.tag}`}>Azure</li>
            <li className={`mx-2 ${styles.tag}`}>Azure DevOps</li>
            <li className={`mx-2 ${styles.tag}`}>Git</li>
            <li className={`mx-2 ${styles.tag}`}>Docker</li>
            <li className={`mx-2 ${styles.tag}`}>Kubernetes</li>
            <li className={`mx-2 ${styles.tag}`}>Terraform</li>
            <li className={`mx-2 ${styles.tag}`}>NodeJs</li>
          </ul>
      </section>
    </main>
}
