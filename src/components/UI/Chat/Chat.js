import {React, useState} from 'react';
import classes from './Chat.module.scss';
import { youTube, netFlix } from '../../../FillerImages';

const { chatWindow, Roulette, chatInput, send } = classes;

const chat = (props) => {
    return (
        <>
            <section className={chatWindow}>
                <p>Chat window here</p>
            </section>
            <section className={Roulette}>
                <img src={youTube} alt="YouTube icon" />
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


export default chat;