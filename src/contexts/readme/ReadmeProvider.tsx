import { useState, type ReactNode, type ChangeEvent } from "react";
import { ReadmeContext } from "./ReadmeContext";

export const ReadmeProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>("");
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

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <ReadmeContext value={{ value, handleChange, setValue, success, error, handleDownload, copyMarkdown }}>{children}</ReadmeContext>
  );
};
