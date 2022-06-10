import React from 'react';

const Search = ({search, setSearch}) => {
    return (
        <form onSubmit={(e)=>e.preventDefault()}>
            <input 
                placeholder='Search Item....'
                className='searchInput'
                type="text" 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
    );
};

export default Search;