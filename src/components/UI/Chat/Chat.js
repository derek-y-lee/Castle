import React, { useState } from 'react';
import classes from './Chat.module.scss';
// import { Link } from 'react-router-dom';
import { youTube, netFlix } from '../../../FillerImages';

import client from 'twilio'
const { Roulette, chatInput, send, playYoutube, inviteFrndBtn } = classes;

const Chat = (props) => {



    // const [ YouTube, toOpenYouTube ] = useState(false);
    // const toggle = () => toOpenYouTube(!YouTube);

    const [youtubeInput, setYoutubeInput] = useState("")
    const [youtubeLink, setYoutubeLink] = useState("https://www.youtube.com/watch?v=tpiyEe_CqB4")

    const [inviteNumber, setInviteNumber] = useState("")

    const handleInvite = () => {
        fetch("/api/inviteNumber", {
            method: "POST",
            body: JSON.stringify({
                number: "" + inviteNumber
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(res => res.text())
            .then((res) => {
                console.log(res)
            })
            .catch(
                res => alert(res)
            )

    }
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
            <input value={youtubeInput} onChange={(e) => setYoutubeInput(e.target.value)} />
            <button
                className={playYoutube}
                onClick={() => setYoutubeLink(youtubeInput)}>Play Youtube Link</button>

            <section className={Roulette}>
                <img src={youTube} alt="YouTube icon" />
                <img src={netFlix} alt="Netflix Icon" />

            </section>
            <section className={chatInput}>
                <textarea type="textarea" />
                <button className={send}>Send</button>
            </section>
            <input value={inviteNumber} onChange={(e) => setInviteNumber(e.target.value)} />
            <button className={inviteFrndBtn} onClick={handleInvite}>Invite Friend</button>
            {" "}Invite Friend by Phone (must include country code e.g +1)

        </>
    );
};


export default Chat;
