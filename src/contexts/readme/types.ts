import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ReadmeContextTypes {
  value: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  setValue: Dispatch<SetStateAction<string>>;
  success: {
    copyBtn?: boolean;
    downloadBtn?: boolean;
  };
  error: {
    copyBtn?: boolean;
    downloadBtn?: boolean;
  };
  handleDownload: (value: string) => void;
  copyMarkdown: (value: string) => void;
}
