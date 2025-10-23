import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { inject } from "@vercel/analytics";

// Initialize analytics (must be called before render)
inject();

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found. Make sure <div id='root'></div> exists in index.html.");
}

createRoot(container).render(
  <App />
);