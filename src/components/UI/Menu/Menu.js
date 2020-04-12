import React from 'react';
import { Link } from 'react-router-dom';
import { icon, friends, scroll, mail } from '../../../FillerImages';
import classes from './Menu.module.scss';


const { userMenuContainer, userMenu } = classes;

const menu = (props) => {
    return (
        <section className={userMenuContainer}>
          <div className={userMenu}>
                <Link to="/dashboard" style={{paddingTop: "1em"}}>
                <img src={icon} alt="icon for app" />
                    <p>Castle</p>
                </Link>
                <Link to="/parties" style={{paddingTop: "1em"}}>
                <img src={friends} alt="icon for app" />
                    <p>Friends</p>
                </Link>
                <Link to="/parties" style={{paddingTop: "1em"}}>
                <img src={scroll} alt="icon for app" style={{paddingBottom:"10px"}}/>
                    <p>Current Party</p>
                </Link>
                <Link to="/parties" style={{paddingTop: "1em"}}>
                <img src={mail} alt="icon for app" style={{paddingBottom:"10px"}}/>
                    <p>Messages</p>
                </Link>
          </div>
        </section>);
};


export default menu;
