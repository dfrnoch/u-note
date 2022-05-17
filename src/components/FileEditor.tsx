import { writeFile } from "@tauri-apps/api/fs";
import { invoke } from "@tauri-apps/api/tauri";
import { FC, useEffect, useState } from "react";
import { File } from "../types";
import { Editor } from "./Editor";

export const FileEditor: FC<{ path: string }> = ({ path }) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const loadFile = async (path?: string) => {
    if (!path) return;
    setLoading(true);
    try {
      const file = await invoke<File>("open_file", { path });
      setContent(file.content || "");
    } catch (err) {

      alert("An error happened opening " + path);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFile(path);
  }, [path]);

  const onSave = async (contents: string) => {
    if (!path) return;
    setContent(content);
    await writeFile({ path, contents });
  };

  return (
    <div>
      {!loading && (
        <Editor key={path} initialValue={content} onSave={(c) => onSave(c)} />
      )}
    </div>
  );
};
