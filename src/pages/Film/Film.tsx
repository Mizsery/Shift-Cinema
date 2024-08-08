import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import clsx from 'clsx';

import { GoBack } from './components/GoBack/GoBack';
import { Place } from './components/Place/Place';
import { Schedule } from './components/Schedule/Schedule';

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
  const [activeDate, setActiveDate] = useState(0);
  const [activeTime, setActiveTime] = useState({
    time: '',
    hail: ''
  });

  const handleSelectTime = (time: string, key: string) => {
    setActiveTime({
      hail: key,
      time
    });
  };

  const handleSelectDate = (index: number) => {
    setActiveDate(index);
    setActiveTime({
      time: '',
      hail: ''
    });
  };

  const { filmId } = useParams({ from: '/film/$filmId' });
  const {
    data: { film, success: filmSuccess }
  } = useSuspenseQuery(getFilmByIdQuery(filmId));
  const {
    data: { schedules, success: scheduleSuccess }
  } = useSuspenseQuery(getFilmScheduleQuery(filmId));

  const filmAgeRating = film.ageRating as keyof typeof filmRating;

  const scheduleList: FilmSeances[] = schedules.map((schedule) => {
    return {
      date: schedule.date,
      seances: schedule.seances
        .sort((a, b) => (a.time > b.time || b.hall.name > a.hall.name ? 1 : -1))
        .reduce((acc, seance) => {
          const groupKey = seance.hall.name;

          if (!acc[groupKey]) {
            acc[groupKey] = [];
          }
          acc[groupKey].push(seance);
          return acc;
        }, {})
    };
  });

  return (
    <div className={clsx(styles.main, className)}>
      <GoBack className={styles.goBack} />
      {filmSuccess && scheduleSuccess ? (
        <section className={styles.sectionFilm}>
          <article className={styles.infoArticle}>
            <FilmImage {...film} />
            <div className={styles.info}>
              <div>
                <Typography component='h1' variant='h1' color='primary'>
                  {`${film.name} (${filmRating[filmAgeRating]})`}
                </Typography>
              </div>

              <div className={styles.ratingSection}>
                <Rating rating={film.userRatings.imdb} />
                <Typography component='p' variant='paragraph-14' color='tertiary'>
                  {`Kinopoisk - ${film.userRatings.kinopoisk}`}
                </Typography>
              </div>

              <div className={styles.descriptionSection}>
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
          </article>

          <article className={styles.scheduleArticle}>
            <Typography component='h2' variant='h2' color='primary'>
              Расписание
            </Typography>

            <Schedule
              schedules={scheduleList}
              activeTime={activeTime}
              activeDate={activeDate}
              handleSelectTime={handleSelectTime}
              handleSelectDate={handleSelectDate}
            />
          </article>

          {activeTime.hail && (
            <article className={styles.placeArticle}>
              <Typography component='h2' variant='h2' color='primary'>
                Выбор места
              </Typography>

              <Place schedules={scheduleList} activeDate={activeDate} activeTime={activeTime} />
            </article>
          )}
        </section>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
