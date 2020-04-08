import React from 'react';
import { Link, Route } from 'react-router-dom';
import classes from './Dashboard.module.scss';
// import CurrentParty from '../CurrentParty/CurrentParty';

import { bannerA, bannerB, leaderboardFill } from '../../FillerImages';

import SocialGroups from './SocialGroups/SocialGroups';

const { layout, userUI, assortmentUI, dashboardView, information, bannerAProp, bannerBProp, leaderboardProp } = classes;

const dashboard = (props) => {
    return (
        <div className={layout}>
            <section className={userUI}>
                <div className={assortmentUI}>
                    <Link to="/" style={{ backgroundColor: "pink" }}>Icon</Link>
                    <Link>Friends</Link>
                    <Link to="/parties">Parties</Link>
                    <Link>????</Link>
                </div>
            </section>
            <section className={dashboardView}>
                <SocialGroups />
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


export default dashboard;