import React from "react";
import { RouterPage } from "./pages/RouterPage";
import { UIProvider } from "./context/UIcontext";
import { SocketProvider } from "./context/SocketContext";

export const TicketApp = () => {
  return (
    <SocketProvider>
      <UIProvider>
        <RouterPage />
      </UIProvider>
    </SocketProvider>
  );
};
