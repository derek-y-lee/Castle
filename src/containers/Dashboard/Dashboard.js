import React from 'react';
import { Link, Route } from 'react-router-dom';
import Menu from '../../components/UI/Menu';

import classes from './Dashboard.module.scss';
// import CurrentParty from '../CurrentParty/CurrentParty';

import { bannerA, bannerB, leaderboardFill } from '../../FillerImages';

import SocialGroups from './SocialGroups/SocialGroups';

const { layout, userUI, assortmentUI, dashboardView, information, bannerAProp, bannerBProp, leaderboardProp } = classes;

const dashboard = (props) => {
    return (
        <div className={layout}>
            <Menu />
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