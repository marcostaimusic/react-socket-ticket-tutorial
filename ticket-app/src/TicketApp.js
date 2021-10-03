import React from "react";
import { RouterPage } from "./pages/RouterPage";
import { UIProvider } from "./context/UIcontext";

export const TicketApp = () => {
  return (
    <UIProvider>
      <RouterPage />
    </UIProvider>
  );
};
