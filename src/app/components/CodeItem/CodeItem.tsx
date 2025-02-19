import { JSX } from "react";
import GitHub from "../Icons/GitHub";

export type CodeItemProps = {
  title: string;
  icon?: JSX.Element;
  githubRepo: string;
  techStack: string[];
  description: string;
  siteUrl?: string;
};

export default function CodeItem({
  title,
  githubRepo,
  techStack,
  description,
}: CodeItemProps & { index: number, total: number }) {
  return (
    <div className={`bg-code rounded-lg mx-4 my-6 border-2 border-bleu px-4 py-2`}>
      <span className={`dark:text-white text-lg uppercase`}>
            {title}
          </span>
      <p className="mb-3">{description}</p>
      <div className="flex mb-3 gap-3">
        <a
          className="w-9"
          title="View on GitHub"
          target="_blank"
          href={`https://github.com/jetodd/${githubRepo}`}
        >
          <GitHub />
        </a>
      </div>
      <div className="flex">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-gray-350 rounded-full bg-bleu px-2 py-1 mr-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
