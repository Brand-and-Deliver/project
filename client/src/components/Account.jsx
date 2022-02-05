import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Account = (props) =>{ 

  const [info,setinfo]=useState(props.data)
  // const [infopost,setinfopost]=useState([])
  // useEffect(() =>{
  //  axios.get("/api/get/post/id",{id:props.data.id})
  //  .then((res)=>{res.data})
  //  .catch((err)=>{console.log(err)})
  // })
  console.log(props.data.id);
  
  return(
  <div id="color">
    <div className="account-container">
      <h1 id="name">
      {info.firstName}
      </h1>
      <Link to='/Editprofile'>
      <li id="editprofile">Edit profile</li>
      </Link> 
      <Link to='/MainPage'>
      <li>HomePage</li>
      </Link> 
      {/* id="title" */}
    </div>
    <div className="info-account-container">
      <h3 className="name1">200 posts</h3>
      <h3 className="name1">50 likes</h3>
    </div>
    <div className="container2">{/* <h1 id="name2">Posts</h1> */}</div>
  </div>
);
}

export default Account;
