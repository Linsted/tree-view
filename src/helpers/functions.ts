import { Permission, FolderNode } from "@/types";

interface IdeleteItem {
  data: FolderNode[];
  id: string;
}

interface IfindUserQuery {
  data: FolderNode[];
  query: string;
}

export function checkPermissions(permissions: Permission[]) {
  return permissions.includes("write") ? true : false;
}

export function deleteItem({ data, id }: IdeleteItem): FolderNode[] {
  if (!data || data.length === 0) {
    return [];
  }

  const filterNodesRecursively = (node: FolderNode): FolderNode | null => {
    if (node.id === id) {
      return null;
    }

    const filteredChildren = (node.children || [])
      .map(filterNodesRecursively)
      .filter((child) => child !== null) as FolderNode[];

    return { ...node, children: filteredChildren };
  };

  const filteredData = data
    .map(filterNodesRecursively)
    .filter((node) => node !== null) as FolderNode[];

  return filteredData;
}

export function findUserQuery({ data, query }: IfindUserQuery) {
  const filterNodesRecursively = (node: FolderNode): FolderNode | null => {
    const lowercaseQuery = query.toLowerCase();
    const lowercaseName = node.name.toLowerCase();

    if (lowercaseName.includes(lowercaseQuery)) {
      const filteredNode: FolderNode = { ...node, children: [] };

      if (node.children && node.children.length > 0) {
        filteredNode.children = node.children
          .map(filterNodesRecursively)
          .filter((filteredChild) => filteredChild !== null) as FolderNode[];
      }

      return filteredNode;
    }

    if (node.children && node.children.length > 0) {
      const filteredChildren = node.children
        .map(filterNodesRecursively)
        .filter((filteredChild) => filteredChild !== null) as FolderNode[];

      if (filteredChildren.length > 0) {
        return { ...node, children: filteredChildren };
      }
    }

    return null;
  };

  const filteredNodes: FolderNode[] = data
    .map(filterNodesRecursively)
    .filter((node) => node !== null) as FolderNode[];

  return filteredNodes;
}
