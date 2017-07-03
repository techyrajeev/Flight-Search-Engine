import React        from 'react';
import SearchBox    from './search-box';
import SearchFilter from './search-filter';

const SearchPage = () => (
    <div className="search-page">
        <SearchBox />
        <SearchFilter />
    </div>
);

export default SearchPage;
