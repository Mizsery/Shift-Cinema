import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import clsx from 'clsx';

import { GoBack } from './components/GoBack/GoBack';

import styles from './Film.module.scss';

import { Button, FilmImage, Rating, Typography } from '@/components';
import { getFilmByIdQuery, getFilmScheduleQuery } from '@/utils/api/request';

interface FilmProps {
  className?: string;
}

const filmRating = {
  PG: '0+',
  PG13: '13+',
  R: '17+',
  NC17: '18+'
};

export const Film = ({ className }: FilmProps) => {
  const [openDescription, setOpenDescription] = useState(false);

  const { filmId } = useParams({ from: '/film/$filmId' });
  const {
    data: { film, success: filmSuccess }
  } = useSuspenseQuery(getFilmByIdQuery(filmId));
  const {
    data: { schedules, success: scheduleSuccess }
  } = useSuspenseQuery(getFilmScheduleQuery(filmId));

  console.log('schedule', schedules);

  const filmAgeRating = film.ageRating as keyof typeof filmRating;

  return (
    <div className={clsx(styles.main, className)}>
      <GoBack className={styles.goBack} />
      {filmSuccess && scheduleSuccess ? (
        <section className={styles.sectionFilm}>
          <FilmImage {...film} />

          <div className={styles.filmInfo}>
            <Typography component='h1' variant='h1' color='primary'>
              {`${film.name} (${filmRating[filmAgeRating]})`}
            </Typography>

            <div className={styles.rating}>
              <Rating rating={film.userRatings.imdb} />
              <Typography component='p' variant='paragraph-14' color='tertiary'>
                {`Kinopoisk - ${film.userRatings.kinopoisk}`}
              </Typography>
            </div>

            <div className={styles.descriptionBlock}>
              <Typography
                component='p'
                variant='paragraph-16-400'
                color='secondary'
                className={openDescription ? '' : styles.description}
              >
                {film.description}
              </Typography>
              <Button variant='outline' onClick={() => setOpenDescription(!openDescription)}>
                {openDescription ? 'скрыть' : 'раскрыть'}
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
