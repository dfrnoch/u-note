export type File = {
  name: string;
  path: string;
  content?: string;
  preview?: string;
};

export type Directory = {
  name: string;
  path: string;
  children_count: number;
};

export type FsElement = {
  File: File;
} & {
  Directory: Directory;
};
