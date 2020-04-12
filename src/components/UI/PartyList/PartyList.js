import React from 'react';
import PartyMember from './PartyMember/PartyMember';

import classes from './PartyList.module.scss';

import { memberList } from '../../../FillerImages';

const { partyContainer } = classes;

 
 
const partyMemberList = {
    leader: 'Jill',
    rank: 'leader'
}

// Would need to turn object into an array and loop through an array. Items inside array would be user data.

const CurrentParty = (props) => {
    return (
        <section className={partyContainer}>
            {/* <img src={memberList} /> */}
            <PartyMember
                name={partyMemberList.leader}
                rank={partyMemberList.rank} />
        </section>
    );
};


export default CurrentParty;