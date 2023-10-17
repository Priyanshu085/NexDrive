"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";


const SearchBar = () => {
  const handleSearch = () => {}
  const [manufacturer, setManuFacturer] = useState('');

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar