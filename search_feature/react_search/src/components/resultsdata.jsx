import React from "react"
import "./resultsdata.css"

export const SearchData = ({ result }) => {
    return (
        <div className="search-data">{result.name}</div>
    )
}