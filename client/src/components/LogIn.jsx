import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = (props) => {
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
 
    const navigate = useNavigate()
   console.log(props.redirct,"bef")
    const routeChange = () => { 
        let path = "/MainPage";
        console.log(props.redirct,"afe")
        if(props.redirct === "/MainPage"){
            navigate(path);
            console.log("yep it works")
        }else{
            path="/"
            navigate(path);
        }
      };
    return (
        <div className='login-container'>
        <h3>Connect to your account :</h3>
        <br/>
            <input type="email" placeholder='Your E-mail...' onChange={(e)=>setEmailLog(e.target.value)}></input>
            <br/>
            <input type="password" placeholder='Your Password...' onChange={(e)=>setPasswordLog(e.target.value)}></input>
            <br/>
            <button id='login-button' type='submit'onClick={()=>{
                props.connect(emailLog,passwordLog);
                setTimeout(()=>{routeChange()},5000)
                }} > Login </button>
            {/* <Link to='/MainPage' >Login</Link> */}
        </div>
    );
}

export default Login;
