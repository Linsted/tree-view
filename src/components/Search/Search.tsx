import { ISearch } from "@/types";

import { useSearch } from "./useSearch";
import { INPUT_TYPES, INPUT_PLACEHOLDER } from "./constants";
import styles from "./Search.module.css";

import { Input } from "../Input/Input";

export function Search({ data, setFilteredData, query, setQuery }: ISearch) {
  const { handleInput } = useSearch({ data, setFilteredData, query, setQuery });

  return (
    <>
      <Input
        handleInput={handleInput}
        type={INPUT_TYPES.TEXT}
        placeholder={INPUT_PLACEHOLDER}
        classNames={styles.input}
      />
    </>
  );
}
