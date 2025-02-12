import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./app/App.tsx";
import { StoreProvider } from "@/app/providers/StoreProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
