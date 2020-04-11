import React, { useState } from 'react';
import classes from './Chat.module.scss';
import { Link } from 'react-router-dom';
import { youTube, netFlix } from '../../../FillerImages';

const { chatWindow, Roulette, chatInput, send } = classes;

const Chat = (props) => {


const [ YouTube, toOpenYouTube ] = useState(false);
const toggle = () => toOpenYouTube(!YouTube);

    return (
        <>
            <section className={chatWindow}>
                <p>Chat here</p>
            </section>
            <section className={Roulette}>
              <a href="https://www.youtube.com/">
                <img src={youTube} alt="YouTube icon"/>
              </a>
                <img src={netFlix} alt="Netflix Icon"/>
                <div>Roulette</div>
                <div>Roulette</div>
            </section>
            <section className={chatInput}>
                <textarea type="textarea" />
                <button className={send}>Send</button>
            </section>
        </>
    );
};


export default Chat;
