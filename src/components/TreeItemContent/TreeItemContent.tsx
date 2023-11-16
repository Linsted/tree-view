import { MdDelete } from "react-icons/md";

import { checkPermissions } from "@/helpers/functions";
import { FolderNode, Permission } from "@/types";

import styles from "./TreeItemContent.module.css";

import { Arrows } from "../Arrows/Arrows";
import { Button } from "../Button/Button";
import { BUTTON_TYPES } from "../Button/constants";

interface TreeItemContentProps {
  isOpen: boolean;
  itemStyles: string;
  handleActiveClick: (id: string) => void;
  handleDeleteClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  name: string;
  children: FolderNode[] | undefined;
  permissions: Permission[];
  id: string;
}

export function TreeItemContent({
  isOpen,
  itemStyles,
  handleActiveClick,
  handleDeleteClick,
  name,
  children,
  permissions,
  id,
}: TreeItemContentProps) {
  return (
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
  );
}
