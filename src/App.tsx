import "./App.css";
import { Header } from "./components/Header";
import { ResultArea } from "./components/ResultArea";
import { TextEditor } from "./components/TextEditor";
import { ToolsMenu } from "./components/ToolsMenu";

function App() {
  return (
    <div className="flex flex-col items-center justify-between min-w-screen min-h-screen bg-dark-color text-neutral-100 gap-5">
      <Header />

      <main className="flex flex-row items-center gap-5 min-w-full lg:pl-10">
        <ToolsMenu />

        <div className="flex flex-col lg:flex-row w-full gap-5 pr-10 lg:pl-10">
          <TextEditor />
          <ResultArea />
        </div>
      </main>

      <footer className="text-center text-md text-neutral-100 pb-5">
        <p>
          Made with ❤️ by{" "}
          <a
            target="_blank"
            href="https://danielsaavedra.dev"
            className="text-blue-400 hover:underline"
          >
            Daniel
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
