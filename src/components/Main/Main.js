import React from 'react';
import classes from './Main.module.scss';
import { NavLink, Switch } from 'react-router-dom';


const { layout, userUI, terminal, activeLink, enterBtn } = classes;

const Main = (props) => {
    return (
        <div className={layout}>
            <section className={userUI}>
                <div className={terminal}>
                    <NavLink exact to="/" activeClassName={activeLink}>log in</NavLink>
                    <NavLink to="/signUp" activeClassName={activeLink}>sign up</NavLink>
                </div>
                <button className={enterBtn}>enter</button>
            </section>
            <p style={{marginTop: "32em"}}>Rally The Kingdom with your friends.</p>
        </div>
    );
};


export default Main;