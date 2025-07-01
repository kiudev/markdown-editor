import { createContext } from "react";
import type { ReadmeContextTypes } from "./types";

export const ReadmeContext = createContext<ReadmeContextTypes | undefined>(undefined)
