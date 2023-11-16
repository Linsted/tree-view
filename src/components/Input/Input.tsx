import { ChangeEvent } from "react";

interface IInput {
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  classNames: string;
}

export function Input({ handleInput, type, placeholder, classNames }: IInput) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleInput}
      className={classNames}
    />
  );
}
