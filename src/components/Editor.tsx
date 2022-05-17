import { FC, useEffect, useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { basename, extname } from "path";
import { useStore } from "../hooks/store";



type EditorProps = {
  initialValue?: string;
  onChange?: (content: string) => any;
  onSave?: (content: string) => any;
};

export const Editor: FC<EditorProps> = ({
  onSave,
  initialValue = "",
}) => {
  const filePaths = useStore((s) => s.currentFilePaths);
  const ext = extname(filePaths[0]).slice(1);
  
  const [state, setState] = useState(initialValue);

  //if ctrl+s is pressed save the file
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "s") {
        //@ts-ignore
        onSave(state);
      }
    }; 
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [state, onSave]);





  return (
    <CodeEditor
      value={initialValue}
      language={ext}
      placeholder="Please enter JS code."
      onChange={(evn) => setState(evn.target.value)}
      padding={15}
      style={{
        fontSize: 12,
        width: "100%",
        height: "100",
        backgroundColor: "#212121",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    /> 

  );
};