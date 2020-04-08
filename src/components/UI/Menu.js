import React from 'react';
import { Link } from 'react-router-dom';
import { icon } from '../../FillerImages';
import classes from './Menu.module.scss';


const { userMenuContainer, userMenu } = classes;

const menu = (props) => {
    return (
        <section className={userMenuContainer}>
            <div className={userMenu}>
                <Link to="/dashboard">
                <img src={icon} /> ss
                </Link>
                <Link>Friends</Link>
                <Link to="/parties">Parties</Link>
                <Link>
                Messages
                </Link>
            </div>
        </section>);
};


export default menu;