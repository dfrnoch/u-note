import constate from "constate";
import { useState } from "react";

const useAppStoreHookRaw = () => {
  const [showSide, setShowSide] = useState(false);
  const [filePath, setFilePath] = useState("");

  return { showSide, setShowSide, filePath, setFilePath };
};

export const [AppStoreProvider, useAppStore] = constate(useAppStoreHookRaw);
