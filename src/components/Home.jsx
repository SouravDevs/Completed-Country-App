import React from 'react'
import { useState } from 'react';
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import CountriesContainer from "./CountriesContainer"




export default function Home() {
    const [query, setQuery] = useState('')
  return (
    <main>
    <div className='search-filter-container'>
      <SearchBar setQuery={setQuery}/>
      <SelectMenu />
    </div>
    <CountriesContainer query={query}/>
    </main>
  )
}
