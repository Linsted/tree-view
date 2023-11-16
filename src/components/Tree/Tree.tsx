import { FolderNode } from "@/types";

import styles from "./Tree.module.css";
import { TreeItem } from "../TreeItem/TreeItem";

interface ITree {
  data: FolderNode[];
  activeId: string | null;
  setActiveId: (id: string) => void;
}

export function Tree({ data, activeId, setActiveId }: ITree) {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <TreeItem
          key={item.id}
          id={item.id}
          name={item.name}
          type={item.type}
          children={item.children}
          permissions={item.permissions}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </ul>
  );
}
