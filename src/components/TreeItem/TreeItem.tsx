import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

import { FolderNode } from "@/types";

import styles from "./TreeItem.module.css";
import { Arrows } from "../Arrows/Arrows";

interface ITreeItem extends FolderNode {
  activeId: string | null;
  setActiveId: (id: string) => void;
}

export function TreeItem({
  id,
  name,
  type,
  children,
  permissions,
  setActiveId,
  activeId,
}: ITreeItem) {
  const [isOpen, setIsOpen] = useState(false);

  const itemStyles = classNames(styles.item, {
    [styles.active]: activeId === id,
  });

  function handleOpenClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    event.stopPropagation();
    setIsOpen((prevState) => !prevState);
  }

  function handleActiveClick(id: string) {
    setActiveId(id);
  }

  return (
    <li onClick={(event) => handleOpenClick(event)}>
      <div className={styles.itemNameContainer}>
        {children && children.length > 0 && <Arrows isOpen={isOpen} />}
        <div className={itemStyles} onClick={() => handleActiveClick(id)}>
          {name}
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
            />
          ))}
        </ul>
      )}
    </li>
  );
}
