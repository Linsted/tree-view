import { INPUT_TYPES, INPUT_PLACEHOLDER } from "./constants";

interface IInput {
  setQuery: (value: string) => void;
}

export function Input({ setQuery }: IInput) {
  return (
    <input
      type={INPUT_TYPES.TEXT}
      placeholder={INPUT_PLACEHOLDER}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
