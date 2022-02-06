import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = (props) => {
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const navigate = useNavigate()
     const routeChange=()=>{
        axios.post('http://localhost:3000/api/login', {
            email:emailLog,
            password:passwordLog
          })
          .then((result)=>{
            let path = "/MainPage";
            props.login(result.data.userinfo,result.data.redirct);
            if(result.data.redirct==="/MainPage"){
                navigate(path)
            }else{
                path="/"
                navigate(path);
            }
          })
          .catch((error)=>{console.log(error)})
     }
    
    return (
        <div className='login-container'>
        <h3>Connect to your account :</h3>
        <br/>
            <input type="email" placeholder='Your E-mail...' onChange={(e)=>setEmailLog(e.target.value)}></input>
            <br/>
            <input type="password" placeholder='Your Password...' onChange={(e)=>setPasswordLog(e.target.value)}></input>
            <br/>
            <button id='login-button' type='submit'onClick={()=>{routeChange()}} > Login </button>
        </div>
    );
}

export default Login;
