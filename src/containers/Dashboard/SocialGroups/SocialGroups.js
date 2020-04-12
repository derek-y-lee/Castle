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
                            <img src={edit} alt="" />
                        </button>
                    </div>
                    <img src={groupASample} alt="example group A" />

                    <h4 className={groupTitle}>Nature is lit</h4>
                </div>
            </div>
            <div className={groupCell}>
                <div className={groupImgContain}>
                    <div className={actionContainer}>
                        <button>
                            <img src={edit} alt="" />
                        </button>
                    </div>
                    <img src={groupBSample} alt="Wine drinking" />
           
                    <h4 className={groupTitle}>Rave baes</h4>

                </div>
            </div>
            <div className={groupCell}>
                <div className={actionContainer}>
                    <button>
                        <img src={edit} alt=""/>
                    </button>
                </div>
                <div className={groupImgContain}>
                    <img src={groupCSample} alt="skyview box" />

                    <h4 className={groupTitle}>Cheer's love!</h4>
                </div>

            </div>
        </section>
    );
};


export default socialGroups;