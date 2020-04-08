import React from 'react';
import classes from './PartyMember.module.scss';

const { userContainer } = classes;

const partyMember = (props) => {
    return (
        <div className={userContainer}>
            {props.name}
        </div>
    );
};


export default partyMember;