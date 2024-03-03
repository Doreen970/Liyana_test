import React from "react"
import "./searchresults.css"
import { SearchData } from "./resultsdata"

export const SearchResults = ({ results }) => {
    return <div className="results-list">
        {
            results.map((result, id) => {
                return <SearchData result={result} key={id} />
            })
        }
            
        </div>
}