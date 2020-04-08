import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Menu.module.scss';

const { userMenuContainer, userMenu } = classes;

const menu = (props) => {
    return (
        <section className={userMenuContainer}>
            <div className={userMenu}>
                <Link to="/dashboard" style={{ backgroundColor: "pink" }}>Icon</Link>
                <Link>Friends</Link>
                <Link to="/parties">Parties</Link>
                <Link>
                Messages
                </Link>
            </div>
        </section>);
};


export default menu;