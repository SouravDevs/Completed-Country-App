import React from 'react'
import { useState } from 'react';
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import CountriesContainer from "./CountriesContainer"
import { useOutletContext } from 'react-router-dom';



export default function Home() {
    const [query, setQuery] = useState('')
   const [isDark] =  useOutletContext()
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
    <div className='search-filter-container'>
      <SearchBar setQuery={setQuery}/>
      <SelectMenu />
    </div>
    <CountriesContainer query={query}/>
    </main>
  )
}
