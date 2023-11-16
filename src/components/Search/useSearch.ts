import { useEffect, ChangeEvent } from "react";

import { ISearch } from "@/types";
import { findUserQuery } from "@/helpers/functions";

export function useSearch({ data, setFilteredData, query, setQuery }: ISearch) {
  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    const filteredData = findUserQuery({ data, query });

    setFilteredData(filteredData);
  }, [data, query, setFilteredData]);

  return { handleInput };
}
