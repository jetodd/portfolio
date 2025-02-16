import { JSX } from "react";
import GitHub from "../Icons/GitHub";

export type CodeItemProps = {
  title: string;
  icon: JSX.Element;
  githubRepo: string;
  techStack: string[];
  description: string;
  siteUrl: string;
};

export default function CodeItem({
  title,
  icon,
  githubRepo,
  siteUrl,
  techStack,
  description,
}: CodeItemProps) {
  return (
    <div className="max-w-sm p-6 bg-sky-800 border rounded-lg shadow-xs border-gray-700 mb-1">
      <p className="mb-3 font-normal text-gray-450">
        {description}
      </p>
      <div className="flex mb-3 gap-3">
        <a
          className="w-7"
          title="View on GitHub"
          target="_blank"
          href={`https://github.com/jetodd/${githubRepo}`}
        >
          <GitHub />
        </a>
        <a
          className="w-14 text-center align-middle text-xs bg-sky-900 hover:bg-sky-950 text-gray-350 rounded-full px-2 py-1 mr-1"
          target="_blank"
          href={siteUrl}
        >
          Site
        </a>
      </div>
      <div className="flex mb-3">
        <a href={siteUrl}>
          <h2 className="mb-2 text-3xl rounded-md border-1 border-sky-950 px-2 hover:bg-sky-950 bg-sky-800 relative -left-15 font-semibold tracking-tight dark:text-white">
            {title}
          </h2>
        </a>
        <div className={"w-12 -ml-10"}>{icon}</div>
      </div>
      <div className="flex">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-sky-900 text-gray-350 rounded-full px-2 py-1 mr-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
