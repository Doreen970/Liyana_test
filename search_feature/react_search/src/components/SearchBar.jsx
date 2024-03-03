import React, {useState} from "react"
import {FaSearch} from "react-icons/fa"
import "./search.css"

// a component that handles the data added in the input field
export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")
    
    const fetchData = (value) => {
        // the API that contains our data
fetch("https://jsonplaceholder.typicode.com/users")
// conversion of the response to json format
.then((response) => response.json())
.then((json) => {
    const results = json.filter((user) => {
        // a feature that ensures only results that match the search criteria are returned. 
        return value && user && user.name && user.name.toLowerCase().includes(value)
    })
    setResults(results)
})
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Type to search....." 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}/>
    </div>
}
