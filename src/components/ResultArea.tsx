import { useReadme } from "@/contexts/readme/useReadme";
// import ReactMarkdown from "react-markdown"
import Markdown from "react-markdown";
import "github-markdown-css/github-markdown-dark.css";

export const ResultArea = () => {
  const { value } = useReadme();

  return (
    <div className="w-full h-96 lg:h-[700px] m-auto overflow-y-auto p-4 max-w-none break-all markdown-body border-neutral-100/10 border-2 rounded-lg scrollbar-thumb-neutral-100 scrollbar scrollbar-track-transparent prose prose-invert">
      <Markdown>{value}</Markdown>
    </div>
  );
};
