import { useState } from "react";

import { FolderNode } from "@/types";

import { Search } from "./components/Search/Search";
import { data } from "./data/response";

// import "./App.css";
Search;

function App() {
  const [filteredData, setFilteredData] = useState<FolderNode[]>([]);
  const [query, setQuery] = useState("");

  console.log(query);

  return (
    <>
      {/* <div>Hello world! I am using React</div> */}
      <Search
        data={data}
        setFilteredData={setFilteredData}
        setQuery={setQuery}
        query={query}
      />
    </>
  );
}

export default App;
