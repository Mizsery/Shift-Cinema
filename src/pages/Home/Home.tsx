import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import clsx from 'clsx';

import styles from './Home.module.scss';

import { Button, FilmImage, Rating, Typography } from '@/components';
import { getFilmsTodayQuery } from '@/utils/api/request';

interface HomeProps {
  className?: string;
}

export const Home = ({ className }: HomeProps) => {
  const {
    data: { films },
    isLoading
  } = useSuspenseQuery(getFilmsTodayQuery);

  return (
    <div className={clsx(styles.main, className)}>
      <Typography component='h2' variant='h2' color='primary' className={styles.title}>
        Афиша
      </Typography>

      <section className={styles.section}>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          films.map((film) => (
            <article key={film.id} className={styles.filmCard}>
              <FilmImage
                name={film.name}
                img={film.img}
                genres={film.genres}
                releaseDate={film.releaseDate}
                country={film.country}
              />

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

              <Link to={`/film/${film.id}`}>
                <Button>Подробнее</Button>
              </Link>
            </article>
          ))
        )}
      </section>
    </div>
  );
};
