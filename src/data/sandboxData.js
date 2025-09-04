import {nightOwl} from "@codesandbox/sandpack-themes";

export const customNightOwl = {
  ...nightOwl,
  colors: {
    ...nightOwl.colors,
    surface1: "#0f172a",
    surface2: "#1e293b",
    surface3: "#1e293b",
  },
};

export const indexHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>To-Do List</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>My To-Do List</h1>
  <ul id="todo-list"></ul>
  <script src="index.js"></script>
</body>
</html>`;

export const stylesCss = `body {
  background-color: #0f172a;
  color: #e2e8f0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  padding: 20px;
}
h1 { margin: 0 0 12px; font-size: 20px; }
ul { padding-left: 20px; margin: 0; }
li { margin-bottom: 8px; }
`;

export const chatScript = [
  { sender: "user", message: "I'm not sure how to start with this DOM task..." },
  { sender: "ai", message: "No problem! First, you'll need a reference to the <ul> element. The document.getElementById('todo-list') method is perfect for that." },
  { sender: "user", message: "Okay, I've got the container. How do I add items to it?" },
  { sender: "ai", message: "You should loop through the todos array. For each item, create a new <li> element using document.createElement('li')." },
  { sender: "user", message: "And how do I put the text inside the <li>?" },
  { sender: "ai", message: "Once you have the <li> element, you can set its content with the textContent property. Then, use appendChild() to add it to your list container." },
];