import React from 'react';
import Menu from '../../components/UI/Menu/Menu';
import PartyList from '../../components/UI/PartyList/PartyList';

import classes from './ChatView.module.scss';

const {layout, dashboardView } = classes;

 
// Would need to turn object into an array and loop through an array. Items inside array would be user data.

const CurrentParty = (props) => {
    return (
        <div className={layout}>
            <Menu />
            <PartyList />
            <section className={dashboardView}>
                <div> chat goes here</div>
            </section>

        </div>

    );
};


export default CurrentParty;