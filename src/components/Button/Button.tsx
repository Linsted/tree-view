import { ReactElement } from "react";

import styles from "./Button.module.css";

interface IButton {
  type: "button" | "submit" | "reset";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon: ReactElement;
}

export function Button({ type, onClick, icon }: IButton) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={(event) => onClick(event)}
    >
      {icon}
    </button>
  );
}
