import React from 'react';
import classes from './PartyMember.module.scss';

const { userContainer, } = classes;

const partyMember = (props) => {
    return (
        <div className={userContainer}>
            {props.image}
            <p>
            <span style={{fontWeight: "bold"}}>{props.name}</span> <br />
            Rank: {props.rank}
            </p>
        </div>
    );
};


export default partyMember;