import { JSX } from "react";

export type CodeItemProps = {
  id: string;
  title: string;
  icon?: JSX.Element;
  githubRepo: string;
  techStack: string[];
  description: string;
  siteUrl?: string;
  bgColor?: string;
  onSelectItem: (key: string) => void;
};

export default function CodeItem({
  title,
  bgColor,
  onSelectItem,
  id,
}: CodeItemProps & { index: number, total: number }) {
  
  const handleClick = () => {
    onSelectItem(id);
  };

  return (
    <div className={`px-4 py-8 cursor-pointer`} style={{ backgroundColor: bgColor }} onClick={handleClick} >
      <span className={`dark:text-white text-lg uppercase text-center`}>
        {title}
      </span>
    </div>
  );
}
