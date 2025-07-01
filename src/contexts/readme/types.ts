import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ReadmeContextTypes {
  value: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  setValue: Dispatch<SetStateAction<string>>;
}
