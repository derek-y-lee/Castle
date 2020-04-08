import React from 'react';
import { groupASample, groupBSample, groupCSample } from '../../../FillerImages';
import classes from './SocialGroups.module.scss';

const { groupContainer, groupCell, groupImgContain, groupTitle } = classes;

const socialGroups = (props) => {
    return (
        <section className={groupContainer}>
            <div className={groupCell}>
                <div className={groupImgContain}>
                    <img src={groupASample} />
                    <h4 className={groupTitle}>Title</h4>
                </div>
            </div>
            <div className={groupCell}>
                <div className={groupImgContain}>
                    <img src={groupBSample} />
                    <h4 className={groupTitle}>Title</h4>

                </div>
            </div>
            <div className={groupCell}>
                <div className={groupImgContain}>
                    <img src={groupCSample} />
                    <h4 className={groupTitle}>Title</h4>
                </div>

            </div>
        </section>
    );
};


export default socialGroups;