import React from 'react';
import './User.css';

const UserInput = (props) =>{
 const inputStyle = {
  border: '2px solid red'
 }
 return(
  <div className='UserInput'>

  <input 
  type = 'text' 
  onChange = {props.changed} 
  value={props.currentName}
   style ={inputStyle}
  />
 

  </div>
 )
}


export default UserInput;