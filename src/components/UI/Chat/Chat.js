import React from 'react';
import classes from './Chat.module.scss';

const { chatWindow, Roulette, chatInput } = classes;

const chat = (props) => {
    return (
        <>
            <section className={chatWindow}>
                <p>Chat window here</p>
            </section>
            <section className={Roulette}>
                <div>Roulette</div>
                <div>Roulette</div>
                <div>Roulette</div>
                <div>Roulette</div>
            </section>
            <section className={chatInput}>
                <textarea type="textarea" />
            </section>
        </>
    );
};


export default chat;