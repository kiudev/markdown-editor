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
  }, []);

  return (
    <div className="flex flex-row-reverse fixed min-h-[700px]">
      {currentWidth <= 1024 && window.innerWidth <= 1024 && (
        <Button
          colors="bg-neutral-100/5 top-0 h-full"
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
        className={`bg-neutral-100/5 w-20 flex justify-between flex-col min-h-[700px] lg:rounded-full m-auto py-10 rounded-br-4xl ${
          isHidden ? "hidden" : "flex"
        }`}
      >
        {tools.map((tool) => (
          <Button
            key={tool.id}
            onMouseEnter={() => setHover(tool.id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleClick(tool.value)}
          >
            {tool.icon}

            {hover === tool.id && (
              <div className="absolute left-20 -mt-2 w-fit whitespace-nowrap text-left bg-dark-color border-neutral-100/20 border-2 px-4 py-2 rounded-lg animate-in fade-in slide-in-from-left-10">
                {tool.tag}
              </div>
            )}
          </Button>
        ))}
      </aside>
    </div>
  );
};
