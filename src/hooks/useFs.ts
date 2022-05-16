import { open } from "@tauri-apps/api/dialog";
import { useStore } from "./store";

export const useFs = () => {
  const set = useStore((s) => s.set);
  const currentDirectoryPath = useStore((s) => s.currentDirectoryPath);

  const openDir = async () => {
    const path = (await open({
      multiple: false,
      directory: true,
    })) as string;
    set({ currentProjectPath: path, currentDirectoryPath: path });
  };
  const openFile = async () => {
    const path = (await open({
      multiple: false,
      defaultPath: currentDirectoryPath,
    })) as string;
    set({ currentFilePaths: [path] });
  };

  return { openDir, openFile };
};
