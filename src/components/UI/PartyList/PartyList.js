import React from 'react';
import PartyMember from './PartyMember/PartyMember';


import classes from './PartyList.module.scss';

import { FaceA, FaceB, FaceC, FaceD, FaceE, FaceF, FaceG, memberList } from '../../../FillerImages';

const { partyContainer } = classes;


const partyMemberList = [
    {
        name: 'Mike Wakowski',
        rank: 'King',
        image: <img src={FaceA} alt="" />
    },
    {
        name: 'Sarah Lee',
        rank: 'Member',
        image: <img src={FaceB} alt="" />
    },
    {
        name: 'Emma Star',
        rank: 'Member',
        image: <img src={FaceC} alt="" />
    },
    {
        name: 'Gina Tran',
        rank: 'Member',
        image: <img src={FaceD} alt="" />
    },
    {
        name: 'Brad Brokowski',
        rank: 'Member',
        image: <img src={FaceE} alt="" />
    },
    {
        name: 'Wade Wilson',
        rank: 'Member',
        image: <img src={FaceF} alt="" />
    },
    {
        name: 'Gwen Stacey',
        rank: 'Member',
        image: <img src={FaceG} alt="" />
    }
]


// Would need to turn object into an array and loop through an arrSay. Items inside array would be user data.

const CurrentParty = (props) => {
    return (
        <section className={partyContainer}>
            {partyMemberList.map((member) => <PartyMember
                name={member.name}
                rank={member.rank}
                image={member.image} />)}


        </section>
    );
};


export default CurrentParty;