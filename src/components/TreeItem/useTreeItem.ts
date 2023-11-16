import classNames from "classnames";
import { useState } from "react";

import { deleteItem } from "@/helpers/functions";
import { FolderNode } from "@/types";

import styles from "./TreeItem.module.css";

interface ITreeItemProps {
  id: string;
  setActiveId: (id: string) => void;
  activeId: string | null;
  data: FolderNode[];
  setFilteredData: (data: FolderNode[]) => void;
}

export function useTreeItem({
  id,
  setActiveId,
  activeId,
  data,
  setFilteredData,
}: ITreeItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const itemStyles = classNames(styles.item, {
    [styles.active]: activeId === id,
  });

  const handleOpenClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  const handleActiveClick = (id: string) => {
    setActiveId(id);
  };

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const updatedData = deleteItem({ data, id });
    setFilteredData(updatedData);
  };

  return {
    isOpen,
    itemStyles,
    handleOpenClick,
    handleActiveClick,
    handleDeleteClick,
  };
}
