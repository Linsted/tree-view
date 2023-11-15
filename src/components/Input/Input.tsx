import { ChangeEvent } from "react";

interface IInput {
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

export function Input({ handleInput, type, placeholder }: IInput) {
  return <input type={type} placeholder={placeholder} onChange={handleInput} />;
}
