import React from 'react';
import { Link } from 'react-router-dom';
import { icon, friends, scroll, mail } from '../../../FillerImages';
import classes from './Menu.module.scss';


const { userMenuContainer, userMenu } = classes;

const menu = (props) => {
    return (
        <section className={userMenuContainer}>
            <div className={userMenu}>
                <Link to="/dashboard">
                    <img src={icon} alt="icon for app" /> 
                    <p>Castle</p> 
                </Link>
                <Link href="www.facebook.com"> 
                    <img src={friends} alt="icon for app" /> 
                    <p>Friends</p> 
                </Link>
                <Link to="/parties" style={{paddingTop: "1em"}}>
                <img src={scroll} alt="icon for app" /> 
                    <p>?????</p> 
                </Link>
                <Link>
                <img src={mail} alt="icon for app" /> 
                    <p>Friends</p>                 </Link>
            </div>
        </section>);
};


export default menu;