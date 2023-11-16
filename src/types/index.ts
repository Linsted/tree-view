type Permission = "read" | "write";

export interface FolderNode {
  id: string;
  name: string;
  type: "folder" | "file";
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
  data: RootNode;
  setFilteredData: (data: FolderNode[]) => void;
  setQuery: (query: string) => void;
  query: string;
}
