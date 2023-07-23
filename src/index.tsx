import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index";
import reportWebVitals from "./reportWebVitals";
import "./app/styled/index.css";
import "./app/styled/colors.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./app/i18n/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

reportWebVitals();
