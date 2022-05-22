export const removeExt = (name: string) =>
  basename(name).replace(extname(name), "");

export const orderWith = (array: string[], guideArray: string[]) => {
  return [
    ...guideArray.filter((e) => array.includes(e)),
    ...array.filter((e) => !guideArray.includes(e)),
  ];
};

export const basename = (path: String) => {
  if (path.includes("\\")) {
    return path.split("\\").reverse()[0];
  }
  return path.split("/").reverse()[0];
};

export const extname = (path: String) => {
  return path.split(".").reverse()[0];
};

export const join = (...paths: string[]) => {
  if (paths[0].includes("\\")) {
    return paths.join("\\");
  }
  return paths.join("/");
};

export const dirname = (path: string) => {
  if (path.includes("\\")) {
    if (path.split("\\").reverse()[0].includes(".")) {
      return path.split("\\").slice(0, -1).join("\\");
    }
    return path;
  }
  if (path.split("/").reverse()[0].includes(".")) {
    return path.split("/").slice(0, -1).join("/");
  }
  return path;
};
