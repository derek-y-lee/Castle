import React, {useState} from 'react';
import Menu from '../../components/UI/Menu/Menu';

import classes from './Dashboard.module.scss';
// import CurrentParty from '../CurrentParty/CurrentParty';

import { bannerA, bannerB, leaderboardFill } from '../../FillerImages';

import SocialGroups from './SocialGroups/SocialGroups';

const { layout, dashboardView, information, bannerAProp, bannerBProp, leaderboardProp } = classes;



const Dashboard = (props) => {

    const [youtubeInput,setYoutubeInput] = useState("")
    const [youtubeLink,setYoutubeLink] = useState("https://www.youtube.com/watch?v=tpiyEe_CqB4")

    return (
        <div className={layout}>
            <Menu />
            <section className={dashboardView}>
                
                <SocialGroups />
                Enter Youtube Link {" "}
                <input value={youtubeInput} onChange={(e)=>setYoutubeInput(e.target.value)}/> 
                <button onClick={()=>setYoutubeLink(youtubeInput)}>Play Youtube Link</button>
                <div>
                <iframe 
                    width="420" 
                    height="315"
                    src={"https://www.youtube.com/embed/" + youtubeLink.split("v=").reverse()[0]}
                >
                </iframe>
                </div>
                <section className={information}>
                    <div>
                    <img className={bannerAProp} alt="bannerA" src={bannerA} />
                    <img className={bannerBProp}  alt="filler display" src={bannerB} />
                    </div>
 
                    <img className={leaderboardProp} alt="leaderboard statistics" src={leaderboardFill} />
                </section>
            </section>

        </div>
    );
};


export default Dashboard;