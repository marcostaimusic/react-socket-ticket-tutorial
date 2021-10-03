import React, { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(true);

  const showingMenu = () => {
    setHideMenu(false);
  };

  const hidingMenu = () => {
    setHideMenu(true);
  };

  return (
    <UIContext.Provider
      value={{
        hideMenu,
        showingMenu,
        hidingMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
