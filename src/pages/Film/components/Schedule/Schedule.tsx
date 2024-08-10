import clsx from 'clsx';

import styles from './Schedule.module.scss';

import { HALL_NAME } from '@/utils/constant';
import { dateToLocal } from '@/utils/helpers';

interface TabsProps {
  className?: string;
  schedules: FilmSeances[];
  activeDate: FilmActiveDate;
  activeTime: FilmActiveTime;

  handleSelectDate: (index: number, date: string) => void;
  handleSelectTime: (time: string, key: string) => void;
}

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
            className={date === activeDate.date ? styles.activeDate : ''}
            onClick={() => handleSelectDate(index, date)}
          >
            {dateToLocal(date).full}
          </button>
        ))}
      </div>

      <div className={styles.hall}>
        {activeDate.date &&
          Object.entries(schedules[activeDate.index].seances).map(([key, value]) => (
            <div key={key} className={styles.seance}>
              <p>{HALL_NAME[key as keyof typeof HALL_NAME]} зал</p>
              <div className={styles.times}>
                {value.map((seance) => (
                  <button
                    type='button'
                    key={seance.time}
                    onClick={() => handleSelectTime(seance.time, key)}
                    className={
                      seance.time === activeTime.time && key === activeTime.hall
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
