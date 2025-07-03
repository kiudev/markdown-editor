import { useReadme } from "@/contexts/readme/useReadme";
import { TextArea } from "./ui/TextArea";
import { Button } from "./ui/Button";
import { DownloadIcon, CopyIcon, Check, X } from "lucide-react";
import { useState } from "react";

export const TextEditor = () => {
  const { value } = useReadme();
  const [success, setSuccess] = useState<{
    copyBtn?: boolean;
    downloadBtn?: boolean;
  }>({
    copyBtn: false,
    downloadBtn: false,
  });

  const [error, setError] = useState<{
    copyBtn?: boolean;
    downloadBtn?: boolean;
  }>({
    copyBtn: false,
    downloadBtn: false,
  });

  const handleDownload = (value: string) => {
    if (!value) {
      setError({ downloadBtn: true });

      setTimeout(() => {
        setError({ downloadBtn: false });
      }, 2000);
    } else {
      const file = new Blob([value], { type: "text/markdown" });
      const url = URL.createObjectURL(file);

      const a = document.createElement("a");
      a.href = url;
      a.download = "README.md";
      a.click();

      URL.revokeObjectURL(url);
      setSuccess({ downloadBtn: true });

      setTimeout(() => {
        setSuccess({ downloadBtn: false });
      }, 2000);
    }
  };

  const copyMarkdown = (value: string) => {
    if (!value) {
      setError({ copyBtn: true });

      setTimeout(() => {
        setError({ copyBtn: false });
      }, 2000);
    } else {
      navigator.clipboard.writeText(value);
      setSuccess({ copyBtn: true });

      setTimeout(() => {
        setSuccess({ copyBtn: false });
      }, 2000);
    }
  };

  return (
    <div className="w-full h-96 lg:h-[700px] m-auto rounded-lg bg-neutral-100/5 relative">
      <TextArea
        className="w-full h-full p-4 outline-none resize-none scrollbar scrollbar-thumb-neutral-100 scrollbar-track-transparent"
        currentValue={value}
        isReadOnly={false}
      />

      <Button
        colors={`text-neutral-100 w-fit p-2.5 rounded-full absolute top-4 right-4 ${
          success.downloadBtn
            ? "bg-green-500 text-neutral-900"
            : error.downloadBtn
            ? "bg-red-500 text-neutral-900"
            : "bg-neutral-100/20"
        }`}
        onClick={() => handleDownload(value)}
      >
        {success.downloadBtn ? (
          <Check width={18} height={18} />
        ) : error.downloadBtn ? (
          <X width={18} height={18} />
        ) : (
          <DownloadIcon width={18} height={18} />
        )}
      </Button>

      <Button
        colors={`text-neutral-100 w-fit p-2.5 rounded-full absolute top-4 right-16 ${
          success.copyBtn
            ? "bg-green-500 text-neutral-900"
            : error.copyBtn
            ? "bg-red-500 text-neutral-900"
            : "bg-neutral-100/20"
        }`}
        onClick={() => copyMarkdown(value)}
      >
        {success.copyBtn ? (
          <Check width={18} height={18} />
        ) : error.copyBtn ? (
          <X width={18} height={18} />
        ) : (
          <CopyIcon width={18} height={18} />
        )}
      </Button>
    </div>
  );
};
