import { useState } from "react";

import { FolderNode } from "@/types";

import { Search } from "./components/Search/Search";
import { data } from "./data/response";

import { Tree } from "./components/Tree/Tree";
import { NotFound } from "./components/NotFound/NotFound";

export function App() {
  const [filteredData, setFilteredData] = useState<FolderNode[]>([]);
  const [query, setQuery] = useState<string>("");
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section>
      <Search
        data={data.children}
        setFilteredData={setFilteredData}
        setQuery={setQuery}
        query={query}
      />
      {filteredData.length > 0 ? (
        <Tree
          data={filteredData}
          activeId={activeId}
          setActiveId={setActiveId}
          setFilteredData={setFilteredData}
        />
      ) : (
        <NotFound />
      )}
    </section>
  );
}
