import { ICosplay } from "@/app/models/ICosplay";
import { RefObject } from "react";
import styles from './Panel.module.css'
import { randomKey } from "@/app/utils/key-generator";

export default function Panel({ 
    ref,
    name,
    isComponentVisible,
    setIsComponentVisible,
    sauce,
    image,
    bgColor,
    text
}: ICosplay & {
  isComponentVisible: boolean, setIsComponentVisible: (arg: boolean) => void,
  ref: RefObject<HTMLDivElement | null>
},
) {
  const togglePanel = () => {
    setIsComponentVisible(!isComponentVisible);
    console.log('togglePanel', isComponentVisible);
  };

  return (
    <div
      ref={ref}
      className={
        "z-[calc(250)] absolute h-full right-0 top-0 text-white " +
        (isComponentVisible ? "w-full md:w-3/4 w-5/6" : "w-0") +
        " max-w-xl transition-all duration-1000 ease-in-out transform h-fill"
      }
      style={{ ["backgroundColor" as any]: bgColor }}
    >
      {isComponentVisible && (
        <div className="p-4">
          <button type="button" onClick={togglePanel} className="content-start text-left">
            <span className={"inline-block " + styles.close}></span>
          </button>
          <aside>      
              <div className="text-2xl">{name}</div>
              <p>{sauce}</p>

              {text.map((paragraph) => {
                return <p key={randomKey()} className="text-justify my-4">{paragraph}</p>;
              })}
          </aside>
        </div>
       )}
    </div>
  );
}
