import React from 'react';
import { groupASample, groupBSample, groupCSample, edit } from '../../../FillerImages';
import classes from './SocialGroups.module.scss';

const { groupContainer, groupCell, groupImgContain, groupTitle } = classes;

const socialGroups = (props) => {
    return (
        <section className={groupContainer}>
            <div className={groupCell}>
                <div className={groupImgContain}>
                    <img src={groupASample} alt="example group" />
                    <button>
                        <img src={edit} />
                    </button>
                    <h4 className={groupTitle}>Title</h4>
                </div>
            </div>
            <div className={groupCell}>
                <div className={groupImgContain}>
                    <img src={groupBSample} alt="example group" />
                    <button>
                        <img src={edit} />
                    </button>
                    <h4 className={groupTitle}>Title</h4>

                </div>
            </div>
            <div className={groupCell}>
                <div className={groupImgContain}>
                    <img src={groupCSample} alt="example group" />
                    <button>
                        <img src={edit} />
                    </button>
                    <h4 className={groupTitle}>Title</h4>
                </div>

            </div>
        </section>
    );
};


export default socialGroups;