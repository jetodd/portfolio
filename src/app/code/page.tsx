import BackLink from "../components/BackLink/BackLink";
import CodeItem from "../components/CodeItem/CodeItem";
import Dice from "../components/Icons/Dice";
import Portfolio from "../components/Icons/Portfolio";
import Recipes from "../components/Icons/Recipes";
import Menu from "../components/Menu/Menu";

export default function Page() {
  return (
    <main
      className="h-dvh w-dvh justify-center content-center"
      style={{ backgroundColor: "var(--color-code)" }}
    >
      <BackLink bgColor="azure" color="white" />
      <Menu currentPage="code" color="azure" />
      <section className="mx-auto -my-32 md:my-0 grid h-screen w-screen flex-col justify-center">
        <CodeItem title="Portfolio" githubRepo="portfolio" description="TODO" icon={<Portfolio />} />
        <CodeItem title="Dicey" githubRepo="dicey" description="TODO" icon={<Dice />} />
        <CodeItem title="Recipes" githubRepo="recipes" description="TODO" icon={<Recipes />} />
      </section>
    </main>
  );
}
