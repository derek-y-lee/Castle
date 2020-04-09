import React from 'react';
import { groupASample, groupBSample, groupCSample, edit } from '../../../FillerImages';
import classes from './SocialGroups.module.scss';

const { groupContainer, groupCell, groupImgContain, groupTitle, actionContainer } = classes;

const socialGroups = (props) => {
    return (
        <section className={groupContainer}>
            <div className={groupCell} style={{ position: "relative" }}>
                <div className={groupImgContain}>
                    <div className={actionContainer}>
                        <button>
                            <img src={edit} />
                        </button>
                    </div>
                    <img src={groupASample} alt="example group" />

                    <h4 className={groupTitle}>Title</h4>
                </div>
            </div>
            <div className={groupCell}>
                <div className={groupImgContain}>
                    <div className={actionContainer}>
                        <button>
                            <img src={edit} />
                        </button>
                    </div>
                    <img src={groupBSample} alt="example group" />
           
                    <h4 className={groupTitle}>Title</h4>

                </div>
            </div>
            <div className={groupCell}>
                <div className={actionContainer}>
                    <button>
                        <img src={edit} />
                    </button>
                </div>
                <div className={groupImgContain}>
                    <img src={groupCSample} alt="example group" />

                    <h4 className={groupTitle}>Title</h4>
                </div>

            </div>
        </section>
    );
};


export default socialGroups;