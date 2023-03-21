import React from 'react';
import './Join.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

let user;


const Join = () => {
    const sendUser = ()=>{
        user = document.getElementById('joinInput').value;
        document.getElementById('joinInput').value=''
    }
    return (
        <div className='joinPage'>
           <div className='joinContainer'>
            <img src={logo} alt="logo" />
            <h1> SUPER CHAT </h1>
            <input placeholder='enter your name' type="text" id='joinInput' />
 
           <Link to='/chat'>
           <button className='joinbtn' onClick={sendUser}>LOgin </button>
           </Link>
           
           </div>

        </div>
    );
};

export default Join;
export{user}