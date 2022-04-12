import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown, setTime } =
    useContext(CountdownContext);
  const [minuteLeft, setMinuteLeft] = useState(String(minutes).padStart(2, '0').split('')[0]);
  const [minuteRight, setMinuteRight] = useState(String(minutes).padStart(2, '0').split('')[1]);
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function calcMinutes() {
    const parseMinutes = parseInt(minuteLeft + minuteRight);
    setTime(parseMinutes * 60);
    Cookies.set('changeTime', String(parseMinutes * 60));
    startCountdown();
  }

  useEffect(() => {
    setMinuteLeft(String(minutes).padStart(2, '0').split('')[0]);
    setMinuteRight(String(minutes).padStart(2, '0').split('')[1]);
  }, [minutes]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>
            <input
              className={(isActive || hasFinished) && styles.inputMinutes}
              disabled={isActive || hasFinished}
              autoFocus
              type="text"
              maxLength={2}
              value={minuteLeft}
              onChange={(e) => setMinuteLeft(e.target.value === '' ? '0' : e.target.value)}
            />
          </span>
          <span>
            <input
              className={(isActive || hasFinished) && styles.inputMinutes}
              disabled={isActive || hasFinished}
              type="text"
              maxLength={2}
              value={minuteRight}
              onChange={(e) => setMinuteRight(e.target.value === '' ? '0' : e.target.value)}
            />
          </span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton} onClick={resetCountdown}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar um ciclo
            </button>
          ) : (
            <button type="button" className={styles.countdownButton} onClick={calcMinutes}>
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
