import { useContext, useEffect } from "react";
import { UIContext } from "../context/UIcontext";

export const useHideMenu = (hide) => {
  const { showingMenu, hidingMenu } = useContext(UIContext);

  useEffect(() => {
    if (hide) {
      hidingMenu();
    } else {
      showingMenu();
    }
  }, [hide, hidingMenu, showingMenu]);
};
