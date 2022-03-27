import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
const SearchBar = () => {
  return (
    <div>
      <div class="input-group m-3 w-75 p-2 mx-auto">
        <div className=" w-75 mx-auto">
       <div className="">
       <input type="name" name="" id=" " className="w-75 p-1" placeholder="search food" />
          <AiOutlineSearch className="ms-2 fs-3"/>
       </div>
          
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
