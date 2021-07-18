import { useState } from "react";
import SearchBar from "../components/search-bar";

export default function SearchContainer() {
  const [searchStr, setSearchStr] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="px-4 pb-4">
          <SearchBar searchString={searchStr} setSearchString={setSearchStr} />
        </div>
      </form>
    </div>
  );
}
