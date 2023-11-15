import { ISearch } from "@/types";

import { useSearch } from "./useSearch";
import { Input } from "../Input/Input";

export function Search({ data, setFilteredData, query, setQuery }: ISearch) {
  useSearch({ data, setFilteredData, query, setQuery });

  return (
    <>
      <Input setQuery={setQuery} />
    </>
  );
}
