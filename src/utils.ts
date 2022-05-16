
import { basename, extname } from "path";

export const removeExt = (name: string) =>
  basename(name).replace(extname(name), "");
  
export const orderWith = (array: string[], guideArray: string[]) => {
  return [
    ...guideArray.filter((e) => array.includes(e)),
    ...array.filter((e) => !guideArray.includes(e)),
  ];
};

