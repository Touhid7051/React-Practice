import React from 'react';
import './UserOutput.css';

const UserOutput = (props) =>{
 return(
  <div className='UserOutput'>

  <p>Username: {props.userName}</p>
  <p>Second Para</p>
  
 

  </div>
 )
}


export default UserOutput;