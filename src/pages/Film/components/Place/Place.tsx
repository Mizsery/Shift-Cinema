import clsx from 'clsx';

import styles from './Place.module.scss';

import { Button, Typography } from '@/components';
import { HALL_NAME, PLACE_STATUS } from '@/utils/constant';
import { dateToLocal } from '@/utils/helpers';

interface PlaceProps {
  className?: string;
  schedules: FilmSeances[];
  activeDate: FilmActiveDate;
  activeTime: FilmActiveTime;
  handleAddPlace: (row: number, place: number) => void;
  places: FilmPlaces[];
}

export const Place = ({
  schedules,
  handleAddPlace,
  places,
  activeDate,
  activeTime,
  className
}: PlaceProps) => {
  const placesArray = schedules[activeDate.index].seances[activeTime.hall]
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
            {placesArray.map((row, rowIndex) => (
              <div key={`${row[0].type}${rowIndex}`} className={styles.row}>
                <span>{rowIndex + 1}</span>
                {row.map((rowPlaces, placeIndex) => (
                  <button
                    type='button'
                    key={`${rowPlaces.type}${placeIndex}`}
                    className={
                      rowPlaces.type === PLACE_STATUS.BLOCKED
                        ? styles.blockedPlace
                        : styles.freePlace
                    }
                    disabled={rowPlaces.type === PLACE_STATUS.BLOCKED}
                    onClick={() => handleAddPlace(rowIndex + 1, placeIndex + 1)}
                  >
                    {places.map(
                      (place) =>
                        place.row === rowIndex + 1 &&
                        place.place === placeIndex + 1 && (
                          <Typography
                            variant='paragraph-14'
                            color='invert'
                            key={`${place.row}${place.place}`}
                            className={styles.activePlace}
                          >
                            {place.place}
                          </Typography>
                        )
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.buyTickets}>
        <div>
          <Typography variant='paragraph-12' color='tertiary'>
            Зал
          </Typography>
          <Typography variant='paragraph-16-400' color='primary'>
            {HALL_NAME[activeTime.hall as keyof typeof HALL_NAME]}
          </Typography>
        </div>

        <div>
          <Typography variant='paragraph-12' color='tertiary'>
            Дата и время
          </Typography>
          <Typography variant='paragraph-16-400' color='primary'>
            {dateToLocal(activeDate.date).short} {activeTime.time}
          </Typography>
        </div>

        <div>
          <Typography variant='paragraph-12' color='tertiary'>
            Места
          </Typography>
          <Typography variant='paragraph-16-400' color='primary'>
            {HALL_NAME[activeTime.hall as keyof typeof HALL_NAME]}
          </Typography>
        </div>

        <Typography component='h3' variant='h3' color='primary'>
          Сумма: 500р
        </Typography>

        <Button>Купить</Button>
      </div>
    </div>
  );
};
