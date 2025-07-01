import { useContext } from "react";
import { ReadmeContext } from "./ReadmeContext";

export const useReadme = () => {
  const context = useContext(ReadmeContext);

  if (!context) {
    throw new Error("ReadmeContext must be within a ReadmeProvider");
  }

  return context;
};
