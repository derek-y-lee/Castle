import React, { useState } from 'react';
import classes from './Chat.module.scss';
import { Link } from 'react-router-dom';
import { youTube, netFlix } from '../../../FillerImages';

const { chatWindow, Roulette, chatInput, send } = classes;

const Chat = (props) => {



// const [ YouTube, toOpenYouTube ] = useState(false);
// const toggle = () => toOpenYouTube(!YouTube);

  const [youtubeInput,setYoutubeInput] = useState("")
  const [youtubeLink,setYoutubeLink] = useState("https://www.youtube.com/watch?v=tpiyEe_CqB4")


    return (
        <>
        <br />
        <br />
        <div>
        <iframe
            width="90%"
            height="385"
            src={"https://www.youtube.com/embed/" + youtubeLink.split("v=").reverse()[0]}
        allowfullscreen>
        </iframe>
        </div>
        Enter Youtube Link {" "}
        <input value={youtubeInput} onChange={(e)=>setYoutubeInput(e.target.value)}/>
        <button onClick={()=>setYoutubeLink(youtubeInput)}>Play Youtube Link</button>

            <section className={Roulette}>
                <img src={youTube} alt="YouTube icon"/>
                <img src={netFlix} alt="Netflix Icon"/>

            </section>
            <section className={chatInput}>
                <textarea type="textarea" />
                <button className={send}>Send</button>
            </section>
        </>
    );
};


export default Chat;
