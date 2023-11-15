import { useEffect } from "react";

import { FolderNode, ISearch } from "@/types";

interface IfindUserQuery {
  data: FolderNode[];
  query: string;
}

export function useSearch({ data, setFilteredData, query }: ISearch) {
  function findUserQuery({ data, query }: IfindUserQuery) {
    const filteredNodes: FolderNode[] = [];

    function searchChildren(children: FolderNode[]) {
      for (const item of children) {
        if (item.name.toLowerCase().includes(query.toLowerCase())) {
          filteredNodes.push(item);
        }

        if (item.children && item.children.length > 0) {
          searchChildren(item.children);
        }
      }
    }

    query.length > 0 && searchChildren(data);

    return filteredNodes;
  }

  useEffect(() => {
    const filteredData = findUserQuery({ data: data.children, query });

    setFilteredData(filteredData);
  }, [data, query, setFilteredData]);
}
