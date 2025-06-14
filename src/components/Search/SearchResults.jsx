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
            {/* if result.ref exists, wrap the result name in an anchor tag */}
            <a href={`${result.id}` || "#"} onClick={handleClick}>
                {result.title}
            </a>
        </div>
    );
};

export default SearchResults;