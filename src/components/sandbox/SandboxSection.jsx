import ReactMarkdown from "react-markdown";
import { Sandpack } from "@codesandbox/sandpack-react";
import { useState, useEffect } from "react";
import { Paper } from "@mantine/core";
import { ChatBubble } from "../challenge/ChatBubble.jsx";

import taskDescription from "../../challenges/task.md?raw";
import indexJs from "../../challenges/index.js?raw";
import {customNightOwl, indexHtml, stylesCss, chatScript} from "../../data/sandboxData.js";

export default function SandboxSection() {
  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    setVisibleMessages([]);
    const interval = setInterval(() => {
      setVisibleMessages((current) => {
        if (current.length < chatScript.length) {
          return [...current, chatScript[current.length]];
        }
        clearInterval(interval);
        return current;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="relative mx-auto max-w-7xl px-6 pt-24 sm:pt-32">
        <h1 className="text-indigo-400 mt-2 text-4xl font-bold sm:text-5xl lg:text-center">The Challenge Page</h1>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
          <Paper
            shadow="md"
            radius="lg"
            p="lg"
            withBorder
            style={{ background: "rgba(30,41,59,0.6)", borderColor: "rgba(255,255,255,0.08)" }}
            className="prose prose-invert max-w-none text-gray-200"
          >
            <ReactMarkdown>{taskDescription}</ReactMarkdown>
            <p className="mt-3 text-sm text-indigo-300/90">
              💡 Read the task, edit <code className="rounded bg-white/10 px-1">index.js</code> and press
              {" "}
              <span className="font-semibold">Run</span>. You can also open the sandbox in a new tab.
              Use AI Assistant to help you.
            </p>
          </Paper>

          <Paper
            shadow="md"
            radius="lg"
            p="lg"
            withBorder
            style={{ background: "rgba(30,41,59,0.6)", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-lg font-semibold text-white">AI Assistant Hint</h3>
            <div className="mt-4 h-80 overflow-y-auto rounded-md bg-slate-800/50 p-4 ring-1 ring-white/10">
              {visibleMessages.map((msg, index) => (
                <ChatBubble key={index} sender={msg.sender} message={msg.message} />
              ))}
            </div>
          </Paper>
        </div>

        <Paper
          shadow="xl"
          radius="lg"
          p="md"
          withBorder
          className="mx-auto mt-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(30,41,59,0.85) 0%, rgba(15,23,42,0.85) 100%)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
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
        </Paper>
      </div>
    </div>
  );
}