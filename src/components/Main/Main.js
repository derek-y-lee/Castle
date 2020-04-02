import React from 'react';
import classes from './Main.module.scss';
import { Link } from 'react-router-dom';


const { layout, userUI, terminal } = classes;

const Main = (props) => {
    return (
        <div className={layout}>
            <section className={userUI}>
                <div className={terminal}>
                    <Link>log in</Link>
                    <Link>sign up</Link>
                </div>

            </section>
            <div>I am a component</div>
        </div>
    );
};


export default Main;