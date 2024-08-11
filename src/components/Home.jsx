import React, { useContext, useEffect } from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";
import { ThemeContext } from "../contexts/ThemeContext";
import { useWindowSize } from "../hooks/useWIndowSize.js";




export default function Home() {
  const [query, setQuery] = useState("");

 
  const windowSize = useWindowSize()

  const [isDark] = useContext(ThemeContext);
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <h1 style={{textAlign: 'center'}}>{windowSize.width} X {windowSize.height}</h1>
      <CountriesContainer query={query} />
    </main>
  );
}
