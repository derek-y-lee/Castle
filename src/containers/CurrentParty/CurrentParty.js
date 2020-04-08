import React from 'react';
import Menu from '../../components/UI/Menu';
import PartyMember from './PartyMember/PartyMember';

import classes from './CurrentParty.module.scss';

const { partyContainer, userUI, layout, dashboardView } = classes;

const partyMemberList = {
    leader: 'Jill',
    rank: 'leader'
}

// Would need to turn object into an array and loop through an array. Items inside array would be user data.

const CurrentParty = (props) => {
    return (
        <div className={layout}>
            <section className={userUI}>
               <Menu />
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