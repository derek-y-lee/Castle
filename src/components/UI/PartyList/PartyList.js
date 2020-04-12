import React from 'react';
import PartyMember from './PartyMember/PartyMember';

import classes from './PartyList.module.scss';

import { FaceA, FaceB, FaceC, FaceD, FaceE, FaceF, FaceG, memberList } from '../../../FillerImages';

const { partyContainer } = classes;


const partyMemberList = 
    {
        name: 'Mike Wakowski',
        rank: 'leader',
        image: <img src={FaceA} alt="" />
    }


// Would need to turn object into an array and loop through an array. Items inside array would be user data.

const CurrentParty = (props) => {
    return (
        <section className={partyContainer}>
            <img src={memberList} />
            {/* <PartyMember
                name={partyMemberList.name}
                image={partyMemberList.image}
                rank={partyMemberList.rank}
                 /> */}
        </section>
    );
};


export default CurrentParty;