import { FC } from "react";
import ReactQuill, { Quill } from "react-quill";
//@ts-ignore cuz no types
import ImageResize from "quill-image-resize-module-react";
import "../styles/quill.css";

//quill fixes and modules
Quill.register("modules/imageResize", ImageResize);
var bold = Quill.import("formats/bold");
bold.tagName = "b"; // Quill uses <strong> by default
Quill.register(bold, true);

var italic = Quill.import("formats/italic");
italic.tagName = "i"; // Quill uses <em> by default
Quill.register(italic, true);

type EditorProps = {
  initialValue?: string;
  onChange?: (content: string) => any;
  onSave?: (content: string) => any;
};

// Text editor component
export const TextEditor: FC<EditorProps> = ({ onSave, initialValue = "" }) => {
  let value = initialValue;

  //Quill.js opotions and modules
  var options = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      [{ font: [] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      ["blockquote", "code-block"],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
    imageResize: {
      modules: ["Resize", "DisplaySize"],
    },
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <ReactQuill
        modules={options}
        value={initialValue}
        onBlur={(e) => {
          //@ts-ignore
          onSave(value);
        }}
        //ctrl s to save
        onKeyDown={(e) => {
          if (
            e.keyCode === 83 &&
            (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
          ) {
            e.preventDefault();
            //@ts-ignore
            onSave(value);
          }
        }}
        onChange={(text: string, delta: any, source: string, editor: any) => {
          value = editor.getHTML();
        }}
        style={{ height: "100%", color: "white", fontFamily: "Roboto-Flex" }}
      />
    </>
  );
};
