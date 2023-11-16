import { MdDelete } from "react-icons/md";

import { FolderNode } from "@/types";
import { checkPermissions } from "@/helpers/functions";

import { useTreeItem } from "./useTreeItem";
import styles from "./TreeItem.module.css";

import { Arrows } from "../Arrows/Arrows";
import { Button } from "../Button/Button";
import { BUTTON_TYPES } from "../Button/constants";

interface ITreeItem extends FolderNode {
  activeId: string | null;
  setActiveId: (id: string) => void;
  data: FolderNode[];
  setFilteredData: (data: FolderNode[]) => void;
}

export function TreeItem({
  id,
  name,
  children,
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
      <div className={styles.itemNameAndButtonContainer}>
        <div className={styles.itemNameContainer}>
          {children && children.length > 0 && <Arrows isOpen={isOpen} />}
          <div className={itemStyles} onClick={() => handleActiveClick(id)}>
            {name}
          </div>
        </div>
        <div>
          {checkPermissions(permissions) && (
            <div>
              <Button
                onClick={handleDeleteClick}
                icon={<MdDelete />}
                type={BUTTON_TYPES.BUTTON}
              />
            </div>
          )}
        </div>
      </div>
      {children && isOpen && (
        <ul className={styles.list}>
          {children.map((child) => (
            <TreeItem
              key={child.id}
              id={child.id}
              name={child.name}
              type={child.type}
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
