import { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './Home.module.scss';

import { Rating, Typography } from '@/components';
import { getCinemaToday, GetCinemaTodayResponse } from '@/utils/api/request';
import { filmRelease } from '@/utils/helpers/filmRelease';

interface HomeProps {
  className?: string;
}

export const Home = ({ className }: HomeProps) => {
  const [data, setData] = useState<GetCinemaTodayResponse | undefined>(undefined);

  useEffect(() => {
    getCinemaToday()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={clsx(styles, className)}>
      <Typography component='h2' variant='h2' color='primary' className={styles.title}>
        Афиша
      </Typography>

      <section className={styles.section}>
        {data?.success &&
          data.films.map((film) => (
            <article key={film.id} className={styles.filmCard}>
              <div className={styles.imageBlock}>
                <img
                  src={`${import.meta.env.VITE_BASE_URL}${film.img}`}
                  alt={`Фильм ${film.name}`}
                />
                <div className={styles.info}>
                  <Typography component='p' variant='paragraph-Roboto-600' color='primary'>
                    {film.genres[0]}
                  </Typography>
                  <Typography component='p' variant='paragraph-Roboto-400' color='primary'>
                    {filmRelease(film.country.name, film.releaseDate)}
                  </Typography>
                </div>
              </div>

              <div className={styles.descriptionSection}>
                <Typography component='h3' variant='h3' color='primary'>
                  {film.name}
                </Typography>
                <Typography
                  component='p'
                  variant='paragraph-14'
                  color='tertiary'
                  className={styles.description}
                >
                  {film.description}
                </Typography>
              </div>

              <div className={styles.rating}>
                <Rating rating={film.userRatings.imdb} />
                <Typography component='p' variant='paragraph-14' color='tertiary'>
                  {`Kinopoisk - ${film.userRatings.kinopoisk}`}
                </Typography>
              </div>

              <div>
                <button>Подробнее</button>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
};
