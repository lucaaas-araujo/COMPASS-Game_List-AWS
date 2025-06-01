import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SidebarProvider } from './context/SidebarContext';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>,
);
