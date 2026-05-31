import GitHub from "../Icons/GitHub";

export type CodeItemProps = {
  id: string;
  image?: string;
  title: string;
  githubRepo: string;
  techStack: string[];
  description: string;
  siteUrl?: string;
  bgColor?: string;
};

export default function CodeItem({
  title,
  description,
  techStack,
  githubRepo,
  siteUrl,
  image,
  bgColor,
  id,
}: CodeItemProps) {
  return (
    <article className="flex flex-col lg:flex-row w-full max-w-4xl mx-6 my-6 rounded-br-3xl overflow-hidden border-4 border-black bg-white text-black">
      <div className="lg:w-1/2 aspect-[3/2] md:aspect-[16/9] lg:aspect-auto relative flex items-center justify-center"
          style={{ backgroundColor: bgColor }}>
            {image ? (
              <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover max-h-200"
            />
          ) : null}
      </div>
      <div className="lg:w-1/2 p-6 flex flex-col gap-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 rounded-full border-2 border-black text-xs font-medium">
              {tech}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-3 mt-auto pt-2">
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
              Visit site
            </a>
          )}
          {githubRepo && (
            <a
            href={`https://github.com/jetodd/${githubRepo}`}
target="_blank"
rel="noopener noreferrer"
title="View on GitHub"
className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
>
<span className="w-4 h-4 inline-block [&_svg]:!w-4 [&_svg]:!h-4 [&_sv
     +g]:!mx-0">
                <GitHub />
              </span>
              Code
          </a>
         )}
     </div>
     </div>
   </article>
  );
}
