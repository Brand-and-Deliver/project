import React,{useState,useEffect} from "react";
import Commints from "./Commints.jsx";
import axios from "axios";
const Postes=(props)=> {

    const [comment, setComment] = useState(''); 
    const [commentId, setCommentId] = useState(undefined);
    const [status, setStatus] = useState(false);
    const [comitofposts,setcomitofposts]=useState([]); 

    useEffect(()=>{
        axios.post('/api/get/commit', {id:props.data.id})
        .then((result)=>{
            console.log(result)
            setcomitofposts(result.data)
        })
        .catch((error)=>{console.log(error)})
    },[])

    const handleComment = () =>{
      axios.post("/api/commits", {
        des:comment,
        userid:props.userid,
        postid:commentId
      })
      axios.post('/api/get/commit', {id:props.data.id})
      .then((result)=>{
          console.log(result)
          setcomitofposts(result.data)
      })
      .catch((error)=>{console.log(error)})
    }
    
    const handleShare = (title,url,id) =>{
      axios.post('/api/post', {
        title:title,
        image:url,
        userid:id
    })
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{console.log(error)})
  }

  const handleLike = (id,postid) =>{
    axios.post('/api/likes', {
      postid:postid,
      userid:id
    })
    .then((result)=>{
      console.log(result)
    })
    .catch((error)=>{console.log(error)})
  }

  return (
      <div id="scroll">
        <div className="post-container" id={props.data.id}>
          <p>{props.data.title}</p>
          <img src={props.data.image} className="image" width="100" height="100"/>
          <button className="like-btn far fa-heart" onClick={()=>{handleLike(props.userid,props.data.id)}}>Like</button>
          <button className="comment-btn far fa-comments"  onClick={()=>{setStatus(true);setCommentId(props.data.id)} }>Comment</button>
          <button className="share-btn fa-share-square" onClick={()=>{handleShare(props.data.title,props.data.image,props.userid)} }>Share</button>
          {status?
            <div>
             <textarea name="comments" 
                onChange={(e)=> setComment(e.target.value)}>
              </textarea> 
              <input type="submit" value="submit"onClick={()=>{handleComment();setStatus(false);}}/>
            </div>
            :null
          }
          {comitofposts.map((element, i)=>{return  (<Commints data={element} key={i}  />)})}
        </div>
      </div>
  );  
}
    
export default Postes;