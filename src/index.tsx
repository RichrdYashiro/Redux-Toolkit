import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { MainApp } from "./apps/MainApp";
import reportWebVitals from "./reportWebVitals";
import { RootStore, StoreContext } from "./store/RootStore";

const rootStore = new RootStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <StoreContext.Provider value={rootStore}>
      <MainApp />
    </StoreContext.Provider>
  </React.StrictMode>,
);

reportWebVitals();
