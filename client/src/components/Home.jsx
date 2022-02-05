import React from 'react';
import { Link } from 'react-router-dom';
const Home = ()=>{
 return(
   <div className='container-home'>
     <div className='home-list-container'>
     <Link to='/register'>
     <li id='register'>REGISTER</li>
     </Link>
     </div>
     <div className='home-list-container'>
     <Link to='/LogIn'>
<<<<<<< HEAD
       <li id='login'>LOGIN</li>
     </Link>
     </div>

      
=======
       <li>LOGIN</li>
     </Link>
     </div>
>>>>>>> e70549139518a302218650c028ccf8ee02b53988
   </div>
 )
}
export default Home;



