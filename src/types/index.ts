export type Permission = "read" | "write";
export type FileType = "folder" | "file";

export interface FolderNode {
  id: string;
  name: string;
  type: FileType;
  permissions: Permission[];
  children?: FolderNode[];
}

export interface RootNode {
  id: string;
  name: string;
  type: "folder";
  permissions: Permission[];
  children: FolderNode[];
}

export interface ISearch {
  data: FolderNode[];
  setFilteredData: (data: FolderNode[]) => void;
  setQuery: (query: string) => void;
  query: string;
}
