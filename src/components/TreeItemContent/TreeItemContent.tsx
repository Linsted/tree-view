import { MdDelete } from "react-icons/md";

import { checkPermissions } from "@/helpers/functions";
import { FolderNode, Permission, FileType } from "@/types";

import styles from "./TreeItemContent.module.css";

import { Arrows } from "../Arrows/Arrows";
import { Button } from "../Button/Button";
import { BUTTON_TYPES } from "../Button/constants";
import { Icons } from "../Icons/Icons";

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
  type: FileType;
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
  type,
}: TreeItemContentProps) {
  return (
    <div className={styles.itemNameAndButtonContainer}>
      <div className={styles.itemNameContainer}>
        {children && children.length > 0 && <Arrows isOpen={isOpen} />}
        <Icons type={type} />
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
