import { useState } from 'react'

import './App.css'

import { SearchBar } from "./components/SearchBar"
import { SearchResults } from "./components/searchresults"

function App() {
  const [results, setResults] = useState([])
  
  return (

      <div className='App'>
        <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
        </div>
        </div>
      
  )
}

export default App
