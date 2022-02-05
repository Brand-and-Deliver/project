import React,{useState} from "react";
import axios from "axios";
function Search({placeholder , data}) {
 const [search,setSearch]=useState('')
 const [info,setinfo]=useState([])
const Search =()=>{
axios.post('/api/searchName',{id:search})
.then((res)=>{setinfo(res.data)})
.catch((err)=>{console.log(err)})
}
  return (
<<<<<<< HEAD
    <div className="search-compo">
      {/* <h4> Search :</h4> */}
=======
    <div>
>>>>>>> e70549139518a302218650c028ccf8ee02b53988
        <input
          id="inputSearch"
          type="text"
          name="search"
          placeholder="top trending"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id="search" type="submit" onClick={Search}>
          Search
        </button>
      
    </div>
  );
}

export default Search;
