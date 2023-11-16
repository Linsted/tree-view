import { useEffect, ChangeEvent } from "react";

import { FolderNode, ISearch } from "@/types";

interface IfindUserQuery {
  data: FolderNode[];
  query: string;
}

export function useSearch({ data, setFilteredData, query, setQuery }: ISearch) {
  function findUserQuery({ data, query }: IfindUserQuery) {
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

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    const filteredData = findUserQuery({ data: data.children, query });

    setFilteredData(filteredData);
  }, [data, query, setFilteredData]);

  return { handleInput };
}
