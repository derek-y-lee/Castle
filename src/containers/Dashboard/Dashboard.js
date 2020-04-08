import React from 'react';
import { Link, Route } from 'react-router-dom';
import classes from './Dashboard.module.scss';
import CurrentParty from '../CurrentParty/CurrentParty';

import SocialGroups from './SocialGroups/SocialGroups';

const { layout, userUI, assortmentUI, dashboardView, information, bannerA, bannerB, leaderBoard } = classes;

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
                    <div className={bannerA}>Adbanner1</div>
                    <div className={bannerB}>Adbanner2</div>
                    <div className={leaderBoard}>
                        Leaderboard
                        <ul>
                            <li>uwu</li>
                            <li>uwu</li>
                            <li>uwu</li>
                            <li>uwu</li>
                            <li>uwu</li>
                        </ul>
                    </div>

                </section>
            </section>

        </div>
    );
};


export default dashboard;