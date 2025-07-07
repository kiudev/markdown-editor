import { Button } from "./ui/Button";
import { DownloadIcon, CopyIcon, Check, X } from "lucide-react";
import { useReadme } from "@/contexts/readme/useReadme";

export const Header = () => {
  const { value, success, error, handleDownload, copyMarkdown } = useReadme();

  return (
    <header className="pt-10 w-full flex justify-between pl-34 lg:pl-44 pr-10">
      <h1 className="text-6xl font-bebas-neue">Markdown Editor</h1>

      <div className="flex flex-row-reverse items-center justify-center gap-3">
        <Button
          colors={`text-neutral-100 w-fit p-3.5 rounded-full ${
            success.downloadBtn
              ? "bg-success-color text-neutral-900"
              : error.downloadBtn
              ? "bg-error-color text-neutral-100"
              : "bg-neutral-100/20"
          }`}
          onClick={() => handleDownload(value)}
        >
          {success.downloadBtn ? (
            <Check width={20} height={20} />
          ) : error.downloadBtn ? (
            <X width={20} height={20} />
          ) : (
            <DownloadIcon width={20} height={20} />
          )}
        </Button>

        <Button
          colors={`text-neutral-100 w-fit p-3.5 rounded-full ${
            success.copyBtn
              ? "bg-success-color text-neutral-900"
              : error.copyBtn
              ? "bg-error-color text-neutral-100"
              : "bg-neutral-100/20"
          }`}
          onClick={() => copyMarkdown(value)}
        >
          {success.copyBtn ? (
            <Check width={20} height={20} />
          ) : error.copyBtn ? (
            <X width={20} height={20} />
          ) : (
            <CopyIcon width={20} height={20} />
          )}
        </Button>
      </div>
    </header>
  );
};
