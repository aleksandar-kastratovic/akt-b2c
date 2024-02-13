import SearchAppPage from "@/components/SearchAppPage/SearchAppPage";
import { Suspense } from "react";

const Search = () => {
  return (
    <Suspense>
      <SearchAppPage />
    </Suspense>
  );
};

export default Search;
