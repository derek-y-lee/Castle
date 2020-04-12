import React from 'react';
import classes from './PartyMember.module.scss';

const { userContainer, } = classes;

const partyMember = (props) => {
    return (
        <div className={userContainer}>
            {props.image}
            {props.name}
            <p>Rank: {props.rank} </p>
        </div>
    );
};


export default partyMember;