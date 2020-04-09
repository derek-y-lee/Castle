import React from 'react';
import Menu from '../../components/UI/Menu/Menu';
import PartyList from '../../components/UI/PartyList/PartyList';
import Chat from '../../components/UI/Chat/Chat';

import classes from './ChatView.module.scss';

const { layout } = classes;


// Would need to turn object into an array and loop through an array. Items inside array would be user data.

const CurrentParty = (props) => {
    return (
        <div className={layout}>
            <Menu />
            <PartyList />
            <div style={{marginTop: "-1em"}}>
                <Chat />
            </div>
        </div>

    );
};


export default CurrentParty;