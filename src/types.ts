export type File = {
  name: string;
  path: string;
  content?: string;
  preview?: string;
  created_at?: number;
  updated_at?: number;
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
