import React, { useState, useEffect } from 'react';

interface SearchInputProps{
    onUpdate: (data:[])=>void
}

function SearchInput({ onUpdate }:SearchInputProps) {
    const [query, setQuery] = useState('');

 

    return (
 
            <input 
            className='p-5  bg-neutral-100 w-80'
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search images..."
            />
 
    );
}

export default SearchInput;