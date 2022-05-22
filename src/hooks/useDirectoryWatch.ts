import { listen } from "@tauri-apps/api/event";
import { invoke } from "@tauri-apps/api/tauri";
import { useEffect } from "react";

//Watches the given directory for changes and invokes the callback function whenever a change is detected.
export const useDirectoryWatch = (path: string, cb: (path: string) => void) => {
  useEffect(() => {
    if (!path) return;
    invoke("watch", { path });
    console.log("watching" + path);
    return () => {
      invoke("unwatch", { path });
    };
  }, [path]);

  useEffect(() => {
    if (!path || !cb) return;

    let stop: any;
    listen<string>("file_changed", (event) => {
      cb(event.payload);
    }).then((fn) => {
      stop = fn;
    });
    return () => {
      stop?.();
    };
  }, [path, cb]);
};
