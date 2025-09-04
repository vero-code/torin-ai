import ReactMarkdown from "react-markdown";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { Sandpack } from "@codesandbox/sandpack-react";

import taskDescription from "../../challenges/task.md?raw";
import indexJs from "../../challenges/index.js?raw";

const customNightOwl = {
  ...nightOwl,
  colors: {
    ...nightOwl.colors,
    surface1: "#0f172a",
    surface2: "#1e293b",
    surface3: "#1e293b",
  },
};

const indexHtml = `<!DOCTYPE html>
<html>
<head>
  <title>To-Do List</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>My To-Do List</h1>
  <ul id="todo-list"></ul>
  <script src="index.js"></script>
</body>
</html>`;

const stylesCss = `body {
  background-color: #1e293b;
  color: #e2e8f0;
  font-family: sans-serif;
  padding: 20px;
}
ul { padding-left: 20px; }
li { margin-bottom: 8px; }`;

export default function SandboxSection() {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <h2 className="text-base/7 font-semibold text-indigo-400">
          The Challenge Sandbox
        </h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          Task
        </p>
        <p className="mt-3 text-sm text-indigo-300/90">
          💡 Read the task, edit <code className="rounded bg-white/10 px-1">index.js</code> and press
          {" "}
          <span className="font-semibold">Run</span>. You can also open the sandbox in a new tab.
        </p>
        <div className="mt-6 prose prose-invert max-w-3xl text-gray-200">
          <ReactMarkdown>{taskDescription}</ReactMarkdown>
        </div>
        <div className="mx-auto mt-10">
          <div className="overflow-hidden rounded-lg ring-1 ring-white/10">
            <Sandpack
              template="vanilla"
              theme={customNightOwl}
              files={{
                "/index.html": { code: indexHtml, hidden: true },
                "/index.js": { code: indexJs, active: true },
                "/styles.css": { code: stylesCss, hidden: true },
              }}
              options={{
                showNavigator: true,
                showTabs: true,
                closableTabs: true,
                autorun: false,
                autoReload: false,
                showConsole: false,
                showConsoleButton: true,
                editorHeight: 520,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}