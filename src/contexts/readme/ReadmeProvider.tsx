import { useState, type ReactNode, type ChangeEvent } from "react";
import { ReadmeContext } from "./ReadmeContext";

export const ReadmeProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <ReadmeContext value={{ value, handleChange, setValue }}>{children}</ReadmeContext>
  );
};
