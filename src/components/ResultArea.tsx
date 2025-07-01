import { useReadme } from "@/contexts/readme/useReadme";
// import ReactMarkdown from "react-markdown"
import Markdown from "react-markdown";
import "github-markdown-css/github-markdown.css";

export const ResultArea = () => {
  const { value } = useReadme();

  return (
    <div className="w-full h-96 lg:h-[700px] m-auto overflow-y-auto p-4 prose prose-invert max-w-none break-words markdown-body border-neutral-100/10 border-2 rounded-lg scrollbar-thumb-neutral-100 scrollbar scrollbar-track-transparent">
      <Markdown>{value}</Markdown>
    </div>
  );
};
