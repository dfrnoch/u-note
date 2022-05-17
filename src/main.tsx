import { AppStoreProvider } from "hooks/appStore";
import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import ReactDOM from "react-dom/client";
import App from "./App";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppStoreProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </AppStoreProvider>
  </React.StrictMode>
);
