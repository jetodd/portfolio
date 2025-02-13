import { ICosplay } from "@/app/models/ICosplay";
import { RefObject } from "react";


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
  };

  return (
    <div
      ref={ref}
      className={
        "z-[calc(250)] absolute h-full right-0 top-0 text-white " +
        (isComponentVisible ? "w-5/6" : "w-[20px]") +
        " max-w-lg transition-all duration-500 ease-in-out transform h-fill"
      }
      style={{ ["backgroundColor" as any]: bgColor }}
    >
      <aside>
        {isComponentVisible && (
           <div>{name}</div> 
        )}
      </aside>
      <div>
        <button
          type="button"
          onClick={togglePanel}
          className="fixed bottom-32 left-[-12px] flex h-6 w-6 items-center justify-center rounded-full bg-white"
        >
          {isComponentVisible ? "-" : "+"}
        </button>
      </div>
    </div>
  );
}
