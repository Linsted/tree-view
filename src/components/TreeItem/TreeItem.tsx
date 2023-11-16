import { FolderNode } from "@/types";

import { useTreeItem } from "./useTreeItem";
import styles from "./TreeItem.module.css";

import { TreeItemContent } from "../TreeItemContent/TreeItemContent";

interface ITreeItem extends FolderNode {
  activeId: string | null;
  setActiveId: (id: string) => void;
  data: FolderNode[];
  setFilteredData: (data: FolderNode[]) => void;
}

export function TreeItem({
  id,
  name,
  children = [],
  permissions,
  setActiveId,
  activeId,
  data,
  setFilteredData,
}: ITreeItem) {
  const {
    isOpen,
    itemStyles,
    handleOpenClick,
    handleActiveClick,
    handleDeleteClick,
  } = useTreeItem({ id, setActiveId, activeId, data, setFilteredData });

  return (
    <li className={styles.listItem} onClick={(event) => handleOpenClick(event)}>
      <TreeItemContent
        isOpen={isOpen}
        itemStyles={itemStyles}
        handleActiveClick={handleActiveClick}
        handleDeleteClick={handleDeleteClick}
        name={name}
        children={children}
        permissions={permissions}
        id={id}
      />
      {children.length > 0 && isOpen && (
        <ul className={styles.list}>
          {children.map((child) => (
            <TreeItem
              key={child.id}
              id={child.id}
              name={child.name}
              children={child.children}
              permissions={child.permissions}
              setActiveId={setActiveId}
              activeId={activeId}
              data={data}
              setFilteredData={setFilteredData}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
