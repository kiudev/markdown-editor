import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ReadmeProvider } from "./contexts/readme/ReadmeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ReadmeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ReadmeProvider>
);
