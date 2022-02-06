import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Likes from "./Likes.jsx";
const Account = (props) =>{ 
  const [infopost,setinfopost]=useState([])
  const [infolikes,setinfolikes]=useState([])
  const likesarr=[]

  useEffect(() =>{

    axios.post("/api/get/post/id",{id:props.data.id})
    .then((res)=>{setinfopost(res.data)})
    .catch((err)=>{console.log(err)})

    axios.get("/api/getlikes")
    .then((res)=>{setinfolikes(res.data)})
    .catch((err)=>{console.log(err)})
  },[])
   
  const deletepost=(id)=>{
    
    axios.delete("/api/delete/poste/commit",{data:{id:id}})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})

    axios.delete("/api/delete/poste",{data:{id:id}})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
   
    axios.post("/api/get/post/id",{id:props.data.id})
   .then((res)=>{setinfopost(res.data)})
   .catch((err)=>{console.log(err)})
  } 

  const func=(likes)=>{
    likesarr.push(likes)
  }

  return(
  <div id="color">
    <div className="account-container">
      <h1 id="name">
      {props.data.firstname} {props.data.lastname}
      </h1>
      <Link to='/Editprofile'>
      <li id="editprofile">Edit profile</li>
      </Link> 
      <Link to='/MainPage'>
      <li>HomePage</li>
      </Link> 
    </div>
    <div className="info-account-container">
      <h3 className="name1">{infopost.length} posts</h3>
      {/* <h3 className="name1">{console.log(likesarr.length)}likes</h3> */}
    </div>
    {
      infopost.map((elem,key)=>{
        return ( 
          <div id={elem.id}>
            <button onClick={()=>{deletepost(elem.id)}}>x</button>
           <div  >
             <p>{elem.title}</p>
             <img src={elem.image} width="100" height="100" />
           </div>
           {infolikes.map((element,i)=>{return <Likes data={element} key={i} id={elem.id} func={func}/> })}
         </div>
        )
      })
    }
  </div>
);}


export default Account;
