import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel, totalExperience } = useContext(ChallengesContext);
    const [ percentToNextLevel, setPercentToNextLevel ] = useState(0);
  
    useEffect(() => {
        if( currentExperience != 0){
            setPercentToNextLevel(Math.round(currentExperience * 100) / experienceToNextLevel);
        }
    })

    return (
        <header className={styles.experienceBar}>
            <span>{String(totalExperience)}</span>
            <div>
                <div style={{ width: `${String(percentToNextLevel)}%` }}></div>

                <span className={styles.currentExperience} style={{left: `${String(percentToNextLevel)}%`}}>
                    {currentExperience}xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}