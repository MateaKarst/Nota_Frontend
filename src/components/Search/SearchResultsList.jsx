"use client";

import SearchResults from "./SearchResults";

import "../../styles/components/search/search-result-list.css";

const SearchResultsList = ({ results }) => {
    if (results.length === 0) return null;

    return (
        <div className="results-list">
            {results.map((result) => (
                <SearchResults result={result} key={result.id} />
            ))}
        </div>
    );
};

export default SearchResultsList;