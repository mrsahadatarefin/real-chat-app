import React, { useEffect, useState } from 'react';
import {user} from "../Join/Join"
import socketIo from 'socket.io-client'
import './Chat.css'
import ReactScrollTOBottom from 'react-scroll-to-bottom'
import closeIcon from '../../images/closeIcon.png'
import sendLogo from '../../images/send.png'
import Message from '../message/Message';
const ENDPOINR ='https://real-chat-server-eight.vercel.app/'

let socket;
const Chat = () => {
    const [id,setId]=useState('')
    const [messages,setMessages]= useState([])

    const send = ()=>{
       const message= document.getElementById('chatInput').value;
       document.getElementById('chatInput').value=""
        socket.emit('message',{message,id});

    }
    
    useEffect(()=>{

        socket= socketIo(ENDPOINR,{transports:['websocket']})
        socket.on('connect',()=>{
            
            setId(socket.id)
        })
        socket.emit('joined',{user})

       socket.on('welcome',(data)=>{
        setMessages([...messages,data])
       
        console.log(data.user,data.message)
       })
socket.on('userJoined',(data)=>{
    setMessages([...messages,data])
console.log(data.user,data.message)
})
socket.on('leave',(data)=>{
    setMessages([...messages,data])
console.log(data.user,data.message)
})

return()=>{
    socket.emit('disconnected')
    socket.off();
}
    },[])


   useEffect(()=>{
    socket.on('sendMessage',(data)=>{
        setMessages([...messages,data])
console.log(data.user,data.message,data.id)
    })
    return()=>{
       socket.off()
    }
   },[messages])

    return (
        <div className='chatPage'>
    <div className='chatContainer'>

        <div className='header'>
            
           <h2> Super Chat</h2>
           <a href="/"><img src={closeIcon} alt=""  /></a>


            </div>
            <ReactScrollTOBottom className='chatBox'> 
            {messages.map((item,i)=><Message  user={item.id===id?'':item.user} message={item.message} classs={item.id===id?'right':'left'} ></Message>)}
             </ReactScrollTOBottom>

          
            <div className='inputBox'>
                <input onKeyPress={(e)=> e.key==='Enter'?send():null} type="text" id='chatInput' />
                <button onClick={send} className='sendBtn'> <img src={sendLogo} alt=""  /></button>
        </div>
    </div>
        </div>
    );
};

export default Chat;