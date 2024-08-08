import clsx from 'clsx';

import styles from './Schedule.module.scss';

import { dateToLocal } from '@/utils/helpers';

interface TabsProps {
  className?: string;
  schedules: FilmSeances[];
  activeDate: number;
  activeTime: {
    time: string;
    hail: string;
  };

  handleSelectDate: (index: number) => void;
  handleSelectTime: (time: string, key: string) => void;
}

const HailName = {
  Red: 'Красный',
  Green: 'Зеленый',
  Blue: 'Синий'
};

export const Schedule = ({
  schedules,
  activeDate,
  activeTime,
  handleSelectDate,
  handleSelectTime,
  className
}: TabsProps) => {
  return (
    <>
      <div className={clsx(styles.tabs, className)}>
        {schedules.map(({ date }, index) => (
          <button
            type='button'
            key={date}
            className={index === activeDate ? styles.activeDate : ''}
            onClick={() => handleSelectDate(index)}
          >
            {dateToLocal(date)}
          </button>
        ))}
      </div>

      <div className={styles.hail}>
        {Object.entries(schedules[activeDate].seances).map(([key, value]) => (
          <div key={key} className={styles.seance}>
            <p>{HailName[key as keyof typeof HailName]} зал</p>
            <div className={styles.times}>
              {value.map((seance) => (
                <button
                  type='button'
                  key={seance.time}
                  onClick={() => handleSelectTime(seance.time, key)}
                  className={
                    seance.time === activeTime.time && key === activeTime.hail
                      ? styles.activeTime
                      : ''
                  }
                >
                  {seance.time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
