"use client";

import { SearchResult } from "./SearchResult";
import "../../styles/components/search/search-result-list.css";

export const SearchResultsList = ({ results }) => {
    if (results.length === 0) return null;

    return (
        <div className="results-list">
            {results.map((result) => (
                <SearchResult result={result} key={result.id} />
            ))}
        </div>
    );
};
