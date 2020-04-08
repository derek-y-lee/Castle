import React from 'react';
import { Link, Route } from 'react-router-dom';
import classes from './Dashboard.module.scss';
import CurrentParty from '../CurrentParty/CurrentParty';

import SocialGroups from './SocialGroups/SocialGroups';

import CastleIcon from './Icons/Castle.js'
import FriendsIcon from './Icons/Friends.js'
import ChatIcon from './Icons/Chat.js'
import FriendsListIcon from './Icons/Friends.js'
import EditGroupIcon from './Icons/Edit.js'
import AddFriendIcon from './Icons/AddFriend.js'

const { layout, userUI, assortmentUI, dashboardView, information, bannerA, bannerB, leaderBoard } = classes;

const dashboard = (props) => {
    return (
        <div className={layout}>
            <section className={userUI}>
                <div className={assortmentUI}>
                    <CastleIcon width = "40px" height = "40px"/>
                    <Link to="/api/dashboard" style={{ backgroundColor: "pink" }}>Icon</Link>
                    <FriendsIcon width = "40px" height = "40px"/>
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
