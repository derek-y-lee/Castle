import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Dashboard.module.scss';

import SocialGroups from './SocialGroups/SocialGroups';

const { layout, userUI, assortmentUI, dashboardView, informationGrid, bannerA, bannerB, leaderShip } = classes;

const dashboard = (props) => {
    return (
        <div className={layout}>
            <section className={userUI}>
                <div className={assortmentUI}>
                    <Link to="/" style={{backgroundColor: "pink"}}>Icon</Link>
                    <Link>Friends</Link>
                    <Link>????</Link>
                    <Link>????</Link>
                </div>
            </section>
            <section className={dashboardView}>
                <SocialGroups />
                <section className={informationGrid}>
                    <div className={bannerA}>Banner A</div>
                    <div className={bannerB}>Banner B</div>
                    <div className={leaderShip}>LeaderShip board</div>

                </section>
            </section>
        </div>
    );
};


export default dashboard;