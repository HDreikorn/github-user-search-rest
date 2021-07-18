import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { fetchSearchUsers } from "../api/endpoints";
import SearchBar from "../components/search-bar";

export default function SearchContainer() {
  const [searchStr, setSearchStr] = useState("");
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    ["users", page],
    async () => fetchSearchUsers(searchStr, page),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    queryClient.prefetchQuery(["users", page + 1], () =>
      fetchSearchUsers(searchStr, page + 1)
    );
  }, [data, page, queryClient, searchStr]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="px-4 pb-4">
          <SearchBar searchString={searchStr} setSearchString={setSearchStr} />
          {console.log(data)}
        </div>
      </form>
    </div>
  );
}
