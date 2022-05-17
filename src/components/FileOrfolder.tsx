import { Separator } from "./Separator";
import { invoke } from "@tauri-apps/api/tauri";
import { FC, useEffect, useState } from "react";
import { FileEditor } from "./FileEditor";
import { useStore } from "../hooks/store";

export const FileOrfolder: FC<{ path: string }> = ({ path }) => {
  const [type, setType] = useState<"file" | "folder" | undefined>();
  const [pathList, setPathList] = useState<string[]>([]);

  const set = useStore((s) => s.set);
  useEffect(() => {
    invoke<boolean>("is_dir", { path }).then((isDir) => {
      if (isDir) {
        invoke<string[]>("list_path_deep", { path, deep: false }).then((l) => {
          console.log(l);
          setPathList(l);
        });
      }
      setType(isDir ? "folder" : "file");
    });
  }, [path]);
  if (!type) return null;
  if (type === "file") return <FileEditor path={path} key={path} />;
  if (type === "folder")
    return (
      <>
        {pathList?.map((path) => (
          <>
            <Separator
              title={path}
              onClick={() => set({ currentFilePaths: [path] })}
            />
            <FileOrfolder path={path} key={path} />
          </>
        )) || null}
      </>
    );
  return null;
};
