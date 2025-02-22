import BackLink from "../components/BackLink/BackLink";
import CodeItem, { CodeItemProps } from "../components/CodeItem/CodeItem";
import Dice from "../components/Icons/Dice";
import Portfolio from "../components/Icons/Portfolio";
import Recipes from "../components/Icons/Recipes";
import Menu from "../components/Menu/Menu";
import styles from './styles.module.css'

const items: CodeItemProps[] = [
  {
    title: "Portfolio",
    githubRepo: "portfolio",
    description:
      "The site that you are currently viewing. A showcase of my work and a playground for me to experiment.",
    icon: <Portfolio />,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    siteUrl: "",
  },
  {
    title: "Dicey",
    githubRepo: "dicey",
    description:
      "A fun little dice rolling app that I made for when people forget their dice but need to slay dragons.",
    icon: <Dice />,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    siteUrl: "https://github.com/jetodd/dicey",
  },
  {
    title: "Recipes",
    githubRepo: "recipes",
    description:
      "Keeps track of recipes that I like, planning for what I'm cooking this week and acts as a shopping list.",
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
      <BackLink bgColor="azure" color="white" />
      <Menu currentPage="code" bgColor="azure" color="bleu" />
       {/* <div className='fixed w-full h-screen z-100'>
            <div className={styles.gridContainer}>
              <div className={styles.gridItem}><img src="/jirachi.svg" className="-ml-40" /></div>
              <div className={styles.gridItem}><img src="/luvdisc.svg" className="" /></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}><img src="/idk.svg" className="" /></div>
              <div className={styles.gridItem}><img src="/snorunt.svg" className="" /></div>
              <div className={styles.gridItem}><img src="/shuppet.svg" className="" /></div>
            </div>
            </div> */}
      <section className="mx-auto md:my-0 mt-20 h-screen w-screen flex-col justify-center z-10">
        <div className="grid grid-cols-1 px-6 md:grid-cols-2 mt-20 md:px-12 lg:px-20">
          {items.map((item, index) => (
            <CodeItem index={index} total={items.length} key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
