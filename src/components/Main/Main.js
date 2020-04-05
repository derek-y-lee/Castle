import React, { useState } from 'react';
import classes from './Main.module.scss';
// import { NavLink, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';


const { layout, userUI, terminal, activeLink, restLink, enterBtn, login, slogan } = classes;

const Main = (props) => {

    const [isToggled, setToggled] = useState(true);
    const toggle = () => setToggled(!isToggled);


    return (
        <div className={layout}>
            <section className={userUI}>
                <div className={terminal}>
                    <button href="/"
                        className={isToggled ? activeLink : restLink}
                        onClick={toggle}>
                        log in
                    </button>
                    <button href="/"
                        className={isToggled ? restLink : activeLink}
                        onClick={toggle}
                       >
                        sign up
                    </button>
                </div>
                {/* <div className={terminal}>
                    <NavLink exact to="/" activeClassName={activeLink}>log in</NavLink>
                    <NavLink to="/signUp" activeClassName={activeLink}>sign up</NavLink>
                </div> */}
                <div style={{ marginTop: "5em" }}>
                    <form className={login}>
                        <input type="email" name="email" placeholder="email" />
                        <input type="password" name="password" placeholder="password" />
                    </form>
                </div>
                <div style={{ marginTop: "5em", marginBottom: "8em" }}>
                    <Link to="/dashboard">
                        <button className={enterBtn}>enter</button>
                    </Link>

                </div>
            </section>
            <section className={slogan}>
                <p>Rally The Kingdom with your friends.</p>
            </section>
        </div>
    );
};


export default Main;