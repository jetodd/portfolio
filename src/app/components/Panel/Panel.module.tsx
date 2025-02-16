import { Cosplay } from "@/app/models/Cosplay";
import { RefObject } from "react";
import styles from './Panel.module.css'
import { randomKey } from "@/app/utils/key-generator";

export default function Panel({ 
    ref,
    cosplay,
    isComponentVisible,
    setIsComponentVisible,
}: {
  ref: RefObject<HTMLDivElement | null>
  cosplay: Cosplay | undefined,
  isComponentVisible: boolean,
  setIsComponentVisible: (arg: boolean) => void,
},
) {
  const togglePanel = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div
      ref={ref}
      className={
        "z-[calc(250)] absolute h-screen right-0 top-0 text-white " +
        (isComponentVisible ? "w-full md:w-5/6 lg:w-3/4" : "w-0") +
        " max-w-xl transition-all duration-1000 ease-in-out transform h-fill"
      }
      style={{ backgroundColor: cosplay?.bgColor }}
    >
      {isComponentVisible && (
        <div className="p-4 flex">
          <button type="button" onClick={togglePanel} className="flex content-start text-left">
            <span className={"inline-block " + styles.close}></span>
          </button>
          
          <aside>      
              <p className="text-2xl text-center">{cosplay!.name}</p>
              <p className="text-center">{cosplay!.sauce}</p>

              {cosplay!.text.map((paragraph) => {
                return <p key={randomKey()} className="text-justify my-4">{paragraph}</p>;
              })}
            </aside>
        </div>
       )}
    </div>
  );
}
