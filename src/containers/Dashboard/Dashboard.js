import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Dashboard.module.scss';

const { layout, userUI, assortmentUI, dashboardView } = classes;

const dashboard = (props) => {
    return (
        <div className={layout}>
            <section className={userUI}>
                <div className={assortmentUI}>
                    <Link to="/" style={{backgroundColor: "pink"}}>Icon</Link>
                    <Link>Friends</Link>
                    <Link>????</Link>
                    <Link>????</Link>
                </div>
            </section>
            <section className={dashboardView}>
                <p>Dashboard Content goes below</p>
            </section>
        </div>
    );
};


export default dashboard;