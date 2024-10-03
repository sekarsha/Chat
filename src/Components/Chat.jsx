import React, { useState } from 'react'
import "../Components/chat.css"
import Chatmsg from './Chatmsg'
import { waittt } from '../chatanalysis'

const Chat = () => {

    const [msgs, setmsgs] = useState([
        {
            msg: "Hi, May i have your Name ?",
        }
    ])

    const [text, settext] = useState(" ")
    console.log(text)


    const onsum = () => {

        let list = [...msgs, { msg: text, user: true }];
        if (list.length > 2) {

            const reply = waittt(text);
            list = [...list, { msg: reply }]
        }

        else {

            list = [
                ...list,
                {
                    msg: `Hi, ${text}`,
                },

                {
                    msg:`Hi ${text}  may I tell you about the course details,Type "YES" or "NO" ` 
                }
            ]

        }
        setmsgs(list);
        settext(" ")

        setTimeout(() => {
            document.querySelector("#sha").scrollIntoView();
        }, 1)
    }


    return (
        <div className=' app'>

            <div className=' d-flex justify-content-center align-items-center'>
                <img src="https://cdn-icons-png.flaticon.com/512/2040/2040946.png" alt="" /><span className=' fw-bold'>Chat bot</span>
            </div>


            <div className=' chat-msg container'>

                <div className=' d-flex justify-content-center mt-2 mb-3' >
                    <div >
                        {
                            msgs.length > 0 && msgs.map((data) => <Chatmsg {...data} />)
                        }
                    </div>


                </div>




                <div className=' d-flex justify-content-center gap-2 '>
                    <input type="text" placeholder="type here" className='form-control w-50' value={text} onChange={(e) => settext(e.target.value)} />
                    <button className=' btn btn-primary' onClick={onsum} >Send</button>
                </div>
                <div id='sha'>
                   <a href="https://github.com/sekarsha?tab=repositories">@copyright Sekar K</a>
                </div>
            </div>



        </div>
    )
}

export default Chat