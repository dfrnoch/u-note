import * as path from "path";

export const removeExt = (name: string) =>
  path.basename(name).replace(path.extname(name), "");

export const orderWith = (array: string[], guideArray: string[]) => {
  return [
    ...guideArray.filter((e) => array.includes(e)),
    ...array.filter((e) => !guideArray.includes(e)),
  ];
};
