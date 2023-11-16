import { useState } from "react";

import { FolderNode } from "@/types";

import { Search } from "./components/Search/Search";
import { data } from "./data/response";

// import styles from "./App.module.css";
import { Tree } from "./components/Tree/Tree";

export function App() {
  const [filteredData, setFilteredData] = useState<FolderNode[]>([]);
  const [query, setQuery] = useState<string>("");
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section>
      <Search
        data={data}
        setFilteredData={setFilteredData}
        setQuery={setQuery}
        query={query}
      />
      {data.children.length > 0 && (
        <Tree
          data={filteredData}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      )}
    </section>
  );
}
