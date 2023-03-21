import React, { useEffect, useState } from 'react';
import {user} from "../Join/Join"
import socketIo from 'socket.io-client'
import './Chat.css'
import sendLogo from '../../images/send.png'
const ENDPOINR ='http://localhost:5000/'

let socket;
const Chat = () => {
    const [id,setId]=useState('')

    const send = ()=>{
       const message= document.getElementById('chatInput').value;
       document.getElementById('chatInput').value=""
        socket.emit('message',{message,id});

    }
    
    useEffect(()=>{

        socket= socketIo(ENDPOINR,{transports:['websocket']})
        socket.on('connect',()=>{
            alert('connected')
            setId(socket.id)
        })
        socket.emit('joined',{user})

       socket.on('welcome',(data)=>{
        console.log(data.user,data.message)
       })
socket.on('userJoined',(data)=>{
console.log(data.user,data.message)
})
socket.on('leave',(data)=>{
console.log(data.user,data.message)
})

return()=>{
    socket.emit('disconnected')
    socket.off();
}
    },[])


   useEffect(()=>{
    socket.on('sendMessage',(data)=>{
console.log(data.user,data.message,data.id)
    })
    return()=>{
       
    }
   },[])

    return (
        <div className='chatPage'>
    <div className='chatContainer'>

        <div className='header'>
            
          


            </div>
            <div className='chatBox'>  </div>

          
            <div className='inputBox'>
                <input type="text" id='chatInput' />
                <button onClick={send} className='sendBtn'> <img src={sendLogo} alt=""  /></button>
        </div>
    </div>
        </div>
    );
};

export default Chat;