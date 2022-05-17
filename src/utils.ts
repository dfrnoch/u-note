export const removeExt = (name: string) =>
  basename(name).replace(extname(name), "");

export const orderWith = (array: string[], guideArray: string[]) => {
  return [
    ...guideArray.filter((e) => array.includes(e)),
    ...array.filter((e) => !guideArray.includes(e)),
  ];
};

export const basename = (path: String) => {
  return path.split("/").reverse()[0];
};

export const extname = (path: String) => {
  return path.split(".").reverse()[0];
};

export const join = (...paths: string[]) => {
  return paths.join("/");
};

export const dirname = (path: String) => {
  return path.split("/").slice(0, -1).join("/");
};
