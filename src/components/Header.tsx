import { Button } from "./ui/Button";
import { DownloadIcon, CopyIcon, Check, X } from "lucide-react";
import { useReadme } from "@/contexts/readme/useReadme";

export const Header = () => {
  const { value, success, error, handleDownload, copyMarkdown } = useReadme();

  return (
    <header className="pt-10 w-full flex flex-col md:flex-row justify-between pl-10 lg:pl-44 pr-10 gap-5 lg:gap-0">
      <h1 className="text-6xl font-bebas-neue">Markdown Editor</h1>

      <div className="flex flex-row-reverse items-start justify-start lg:justify-center gap-3 mx-auto md:mx-0">
        <Button
          colors={`text-neutral-100 w-fit p-5 lg:p-3.5 rounded-full ${
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
          colors={`text-neutral-100 w-fit p-5 lg:p-3.5 rounded-full ${
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
