import React from 'react';
const Likes=(props)=>{
    return(
        <div>
            {props.data.post_id === props.id ? props.func(props.data):null }
        </div>
    )
}
export default Likes