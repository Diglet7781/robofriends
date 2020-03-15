import React from 'react';


const SearchBox=({searchChange})=>{
    return(
        <div >
            <input 
            className="bg-light-green dib br3 pa3 ma2 grow" 
            type="search"  
            placeholder="search Robots"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;