import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type SearchContextType = {
  search: string;
  updateSearch: Dispatch<SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextType>({
  search: "",
  updateSearch: () => undefined,
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider
      value={{
        search,
        updateSearch: setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
