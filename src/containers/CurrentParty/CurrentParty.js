import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CurrentParty.module.scss';
import PartyMember from './PartyMember/PartyMember';

const { partyContainer, userUI, layout, assortmentUI, dashboardView } = classes;

const partyMemberList = {
    leader: 'Jill',
    rank: 'leader'
}

// Would need to turn object into an array and loop through an array. Items inside array would be user data.

const CurrentParty = (props) => {
    return (
        <div className={layout}>
            <section className={userUI}>
                <div className={assortmentUI}>
                    <Link to="/dashboard" style={{ backgroundColor: "pink" }}>Icon</Link>
                    <Link>Friends</Link>
                    <Link to="/parties">Current Party</Link>
                    <Link>????</Link>
                </div>
            </section>
            <section className={partyContainer}>
                <PartyMember
                    name={partyMemberList.leader}
                    rank={partyMemberList.rank}/>
              </section>
            <section className={dashboardView}>
             <div> chat goes here</div>
             </section>

        </div>

    );
};


export default CurrentParty;
