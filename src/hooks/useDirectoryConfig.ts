import { readTextFile, writeFile } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type Config = {
  customOrder: string[];
};

const defaultConfig: Config = {
  customOrder: [],
};

//loads a file from a directory and sets the config for that directory.
export const useDirectoryConfig = (path: string) => {
  const [config, setConfigRaw] = useState<Config>(defaultConfig);
  const writeDebounce = useDebouncedCallback(
    (path: string, contents: string) =>
      writeFile({
        path,
        contents,
      }),
    1000,
  );

  const setConfig = (configPatch: Partial<Config>) => {
    const newConfig = { ...config, ...configPatch };
    writeDebounce(path + "/.unote", JSON.stringify(newConfig));
    setConfigRaw(newConfig);
  };
  
  // Loads the config for the given directory.
  useEffect(() => {
    if (!path) return;
    readTextFile(path + "/.unote")
      .then((textConfig) => setConfigRaw(JSON.parse(textConfig)))
      .catch((_err) =>
        console.log("Could not read the directory config for " + path)
      );
  }, [path]);

  return [config, setConfig] as const;
};
