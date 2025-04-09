"use client";

export const SearchResult = ({ result }) => {
    return (
        <div
            className="search-result"
            onClick={() => alert(`You selected ${result.name} (${result.type})`)}
        >
            {result.name} <span className="result-type">[{result.type}]</span>
        </div>
    );
};
