import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return <h2>No results found</h2>;
  }

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="products">
        {results.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
