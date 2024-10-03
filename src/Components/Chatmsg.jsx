import React from 'react'
import {ChatDots, Person} from "react-bootstrap-icons"

const Chatmsg = (props) => {
  return (
    <div className={` d-flex   rounded rounded-3 ${props.user && "  justify-content-end"}`}>
        {
            props.user ? ( <span className=' msg-right d-flex align-content-center align-items-center'>
             <Person className=' msg-icon'/>    <span className=' msg-text '>{props.msg} </span> 
            </span>  ):(<span className=' msg-left d-flex align-content-center align-items-center '>
                <ChatDots className=' msg-icon' />
                <span className=' msg-text '>{props.msg} </span> 
            </span>)
        }
    </div>
  )
}

export default Chatmsg