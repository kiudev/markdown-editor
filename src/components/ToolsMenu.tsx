import { useReadme } from "@/contexts/readme/useReadme";
import { Button } from "./ui/Button";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useEffect, useState } from "react";
import { tools } from "./Tools";

export const ToolsMenu = () => {
  const { setValue, value } = useReadme();
  const [hover, setHover] = useState<number | null>(null);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  const handleClick = (newValue: string) => {
    if (!value) {
      setValue(value + newValue);
    } else {
      setValue(value + "\n" + newValue);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrentWidth(window.innerWidth);
    });

    window.addEventListener("load", () => {
      setCurrentWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="flex flex-row-reverse min-h-[620px]">
      {currentWidth <= 1024 && window.innerWidth <= 1024 && (
        <Button
          colors="bg-dark-color border-2 border-neutral-100/10 lg:border-0 lg:bg-neutral-100/5 top-0 lg:h-full absolute rotate-90 lg:rotate-0 left-20 h-auto lg:static"
          onClick={() => setIsHidden(!isHidden)}
        >
          {!isHidden ? (
            <ChevronsLeft width={30} height={30} />
          ) : (
            <ChevronsRight width={30} height={30} />
          )}
        </Button>
      )}

      <aside
        className={`bg-dark-color border-neutral-100/10 border-r-2 border-b-2 lg:border-0 lg:bg-neutral-100/5 w-20 flex gap-6 justify-center flex-col lg:rounded-full m-auto py-10 rounded-br-4xl ${
          isHidden ? "hidden" : "flex"
        } fixed left-0 top-0 lg:static`}
      >
        {tools.map((tool) => (
          <Button
            key={tool.id}
            onMouseEnter={() => setHover(tool.id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleClick(tool.value)}
          >
            {tool.icon}

            {hover === tool.id && currentWidth >= 768 && (
              <div className="absolute left-28 -mt-2 w-fit whitespace-nowrap bg-dark-color border-neutral-100/20 border-2 px-4 py-2 rounded-lg animate-in fade-in slide-in-from-left-10">
                {tool.tag}
              </div>
            )}
          </Button>
        ))}
      </aside>
    </div>
  );
};
