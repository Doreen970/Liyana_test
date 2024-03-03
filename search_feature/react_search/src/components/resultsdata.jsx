import React from "react"
import "./resultsdata.css"

export const SearchData = ({ result }) => {
    // This is a component that handles all the data returned after a user search
    return (
        <div className="search-data">{result.name}</div>
    )
}