import { JSX } from "react";
import GitHub from "../Icons/GitHub";

export type CodeItemProps = {
    title: string
    icon: JSX.Element
    githubRepo: string

    description: string
}

export default function CodeItem({title, icon, githubRepo, description}: CodeItemProps) {
  return (
    <div className="max-w-sm p-6 bg-sky-900 border rounded-lg shadow-sm border-gray-700 mb-1">
      <div className={"w-12"}>{icon}</div>
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
        <a className="w-12 block" title="View on GitHub" target="_blank" href={`https://github.com/jetodd/${githubRepo}`}><GitHub /></a>
    </div>
  );
}
