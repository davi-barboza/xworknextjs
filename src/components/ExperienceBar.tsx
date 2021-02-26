import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
   
    const percetToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0px</span>
            <div>
                <div style={{width: `${percetToNextLevel}%` }}></div>

                <span className={styles.currentExperience} style={{left: `${percetToNextLevel}`}}>
                    {currentExperience}xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}