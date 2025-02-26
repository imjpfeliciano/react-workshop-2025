import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import AppRouter from "./AppRouter";
import TeamContextProvider from "./context/teamContext";

const root = createRoot(document.getElementById("root")!);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TeamContextProvider>
          <AppRouter />
        </TeamContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
