import clsx from 'clsx';

import styles from './Place.module.scss';

import { Typography } from '@/components';

interface PlaceProps {
  className?: string;
  schedules: FilmSeances[];
  activeDate: number;
  activeTime: {
    time: string;
    hail: string;
  };
}

export const Place = ({ schedules, activeDate, activeTime, className }: PlaceProps) => {
  const places = schedules[activeDate].seances[activeTime.hail]
    .filter((place) => place.time === activeTime.time)
    .map((elem) => elem.hall.places)[0];

  console.log(places);

  return (
    <div className={clsx(styles.place, className)}>
      <div className={styles.places}>
        <div className={styles.placeHeader}>
          <Typography variant='paragraph-12' color='secondary'>
            Экран
          </Typography>
          <hr />
        </div>

        <div className={styles.rowsPlaces}>
          <Typography variant='paragraph-12' color='secondary'>
            Ряд
          </Typography>

          <div className={styles.rows}>
            {places.map((row, index) => (
              <div key={`${row[0].type}${index}`} className={styles.row}>
                <span>{index + 1}</span>
                {row.map((elem, index) => (
                  <button
                    key={`${elem.type}${index}`}
                    className={elem.type === 'BLOCKED' ? styles.blockedPlace : styles.freePlace}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.buyTickets}>Купить</div>
    </div>
  );
};
