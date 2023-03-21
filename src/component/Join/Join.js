import React, { useState } from 'react';
import './Join.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

let user;
const sendUser = ()=>{
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value=''
}

const Join = () => {
   const [name,setName]=useState('') 
    
    return (
        <div className='joinPage'>
           <div className='joinContainer'>
            <img src={logo} alt="logo" />
            <h1> SUPER CHAT </h1>
            <input onChange={(e)=>setName(e.target.value)} placeholder='enter your name' type="text" id='joinInput' />
 
           <Link to='/chat' onClick={(e)=>!name ? e.preventDefault(): null}>
           <button   className='joinbtn' onClick={sendUser} >LOgin </button>
           </Link>
           
           </div>

        </div>
    );
};

export default Join;
export{user}