import React from 'react';
import {getAllEvents} from '../../store/eventIndex'

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F0E9DC", border: "1px solid #891277", padding:"0.3rem", marginLeft: "1rem"};


  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search events"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar