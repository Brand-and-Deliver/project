import React from 'react';

const commints=(props)=> {
  return (
  <div id={props.data.id} >  
    <p >{props.data.des}</p>   
  </div>
  );
}
export default commints;