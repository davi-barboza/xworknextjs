import { Session } from 'next-auth';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile(props: Session) {
    const { level } = useContext(ChallengesContext);
    const { user } = props;
    return (
      <div className={styles.profileContainer}>
        <img src={user?.image} alt={user?.name} />
        <div>
          <strong>{user?.name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level {level}
          </p>
        </div>
      </div>
    );
}