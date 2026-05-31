import { Cosplay } from "@/app/models/Cosplay";
import { RefObject } from "react";
import styles from "./Panel.module.css";
import { randomKey } from "@/app/utils/key-generator";

export default function Panel({
  ref,
  cosplay,
  isComponentVisible,
  setIsComponentVisible,
}: {
  ref: RefObject<HTMLDivElement | null>;
  cosplay: Cosplay | undefined;
  isComponentVisible: boolean;
  setIsComponentVisible: (arg: boolean) => void;
}) {
  const IMAGE_FOLDER = "/cosplay/";

  const togglePanel = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div
      ref={ref}
      className={
        "z-[calc(250)] absolute h-screen right-0 top-0 text-white " +
        (isComponentVisible ? "w-full" : "w-0") +
        " transition-all duration-1000 ease-in-out transform h-fill"
      }
      style={{ backgroundColor: cosplay?.bgColor }}
    >
      {isComponentVisible && (
        <div className="p-4 flex">
          <button
            type="button"
            onClick={togglePanel}
            className="flex content-start text-left mr-2"
          >
            <span className={"inline-block " + styles.close}></span>
          </button>

          <aside>
            {cosplay!.image ? (
              <aside className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
                <div
                  className="relative aspect-square w-full lg:w-1/2 lg:shrink-0 max-w-[600px] rounded-2xl mx-auto"
                  style={{ backgroundColor: cosplay!.accentColor }}
                >                <img
                    src={`${IMAGE_FOLDER}${cosplay!.image}`}
                    alt={cosplay!.name}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 max-h-[100%] object-contain z-0"
                  />
                  <p
                    className="absolute bottom-4 left-0 right-0 text-center text-4xl font-bold z-10 font-[Oliver]"
                    style={{
                      WebkitTextStroke: "2px black",
                      paintOrder: "stroke fill",
                      textShadow: "-2px 2px black",
                    }}
                  >
                    {cosplay!.name}
                  </p>
                </div>
                <div>
                  {cosplay!.text.map((paragraph) => {
                    return (
                      <p key={randomKey()} className="text-justify my-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </aside>
            ) : (
              <>
                <p className="text-2xl text-center">{cosplay!.name}</p>
                <p className="text-center">{cosplay!.sauce}</p>

                {cosplay!.text.map((paragraph) => {
                  return (
                    <p key={randomKey()} className="text-justify my-4">
                      {paragraph}
                    </p>
                  );
                })}
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
