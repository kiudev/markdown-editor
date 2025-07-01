import { useReadme } from "@/contexts/readme/useReadme";
import { Button } from "./ui/Button";

import { useState } from "react";
import { tools } from "./Tools";

export const ToolsMenu = () => {
  const { setValue, value } = useReadme();
  const [hover, setHover] = useState<number | null>(null);

  const handleClick = (newValue: string) => {
    if (!value) {
      setValue(value + newValue);
    } else {
      setValue(value + "\n" + newValue);
    }
  };

  return (
    <aside className="w-full bg-neutral-100/5 lg:w-20 fixed flex justify-between lg:flex-col lg:min-h-[700px] rounded-full m-auto py-10">
      {tools.map((tool) => (
        <Button
          onMouseEnter={() => setHover(tool.id)}
          onMouseLeave={() => setHover(null)}
          key={tool.id}
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
  );
};
