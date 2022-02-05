import React,{useState,useEffect} from "react";
import Nav from "./Nav.jsx";
import Postes from "./Postes.jsx";
import axios from "axios";
import 'regenerator-runtime/runtime';
const MainPage=(props)=> {
  const [posts,setPosts] = useState([]);
<<<<<<< HEAD
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState('');
  const [commentId, setCommentId] = useState(0);
  const [share, setShare] = useState();
  const [status, setStatus] = useState(false);

  // useEffect(()=>{
  //  axios.get("/api/get/post")
  //  .then((res)=>{
  //    setPosts(res.data);
  //    console.log(res.data, "hello")
  //  })
  //   .catch((err)=>
  //   console.log(err))
  // }, [])
  
=======
  // const [like, setLike] = useState(0); onClick={setLike(like+1)}
  // const [comment, setComment] = useState(''); 
  // const [commentId, setCommentId] = useState(0);
  // // const [share, setShare] = useState();
  // const [status, setStatus] = useState(false);
>>>>>>> e70549139518a302218650c028ccf8ee02b53988

  useEffect(()=>{
    axios.get("/api/get/post")
    .then(async(res)=>{
      var awai = await res.data
      setPosts(awai)
      console.log(awai, "hello")
    })
     .catch((err)=>
     console.log(err))
  },[])
  

  // const handleComment = () =>{
  //   // axios.post("/commits", {
  //   //   des:comment,
  //   //   user_id:props.userId,
  //   //   post_id:commentId
  //   // })
  //   console.log(comment,"user",props.userId,"comid",commentId);
  // }

return (
    <div>
        <Nav />
        <h1>postes</h1>
<<<<<<< HEAD
        {posts.map((elem,i)=>{
          return (
            <div className="post-container" key={i}>
            <img src={elem.image} className="image" widh="500" height="600"/>
              <button className="like-btn" onClick={setLike(like+1)}>Like</button>
              <button className="comment-btn" onClick={setStatus(status+true)}>Comment</button>
              {status===true
              ?
              <textarea 
              name="comments" 
              id={setCommentId(commentId+i)}
              onChange={(e)=> setComment(e.target.value)}>
              </textarea> &&
              <input 
              type="submit" 
              value="submit"
              onClick={handleComment}
              ></input>
              :
              null}
              <button className="share-btn">Share</button>
            </div>
          )
        })}
=======
        {posts.map((element, i)=>{return <Postes data={element} key={i} userid={props.userId} /> })}   
>>>>>>> e70549139518a302218650c028ccf8ee02b53988
    </div>
);  
}
  
  export default MainPage;