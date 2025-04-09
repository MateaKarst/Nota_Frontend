"use client";

import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
    if (results.length === 0) return null;

    return (
        <div className="search-results">
            {results.map((item) => (
                <SearchResult key={item.id} result={item} />
            ))}
        </div>
    );
};
