"use client";

const SearchResults = ({ result }) => {
    const handleClick = (e) => {
        if (!result.ref) {
            e.preventDefault();
            alert(`No route specified for ${result.name}`);
        }
    };

    return (
        <div className="search-result">
            {/* If result.ref exists, wrap the result name in an anchor tag */}
            <a href={result.ref || "#"} onClick={handleClick}>
                {result.name}
            </a>
        </div>
    );
};

export default SearchResults;