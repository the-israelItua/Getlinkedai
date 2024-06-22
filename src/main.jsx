import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-circular-progressbar/dist/styles.css";
import "@fontsource/dm-sans";
import "@fontsource/nunito";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/nunito/400.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
