import React from 'react';

import classes from './SocialGroups.module.scss';

const { groupContainer, groupCell } = classes;

const socialGroups = (props) => {
    return (
        <section className={groupContainer}>
            <div className={groupCell}>
                <div>Image</div>
                <h4>Title</h4>
                <div>
                    <div>Faces</div>
                </div>
            </div>
            <div className={groupCell}>
                <div>Image</div>
                <h4>Title</h4>
                <div>
                    <div>Faces</div>
                </div>
            </div>
            <div className={groupCell}>
                <div>Image</div>
                <h4>Title</h4>
                <div>
                    <div>Faces</div>
                </div>
            </div>
        </section>
    );
};


export default socialGroups;