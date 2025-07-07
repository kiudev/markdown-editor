import { useReadme } from "@/contexts/readme/useReadme";
import { TextArea } from "./ui/TextArea";


export const TextEditor = () => {
  const { value } = useReadme();

  return (
    <div className="w-full h-96 lg:h-[700px] m-auto rounded-lg bg-neutral-100/5">
      <TextArea
        className="w-full h-full p-4 outline-none resize-none scrollbar scrollbar-thumb-neutral-100 scrollbar-track-transparent break-all"
        currentValue={value}
        isReadOnly={false}
      />
    </div>
  );
};
