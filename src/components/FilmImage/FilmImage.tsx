import clsx from 'clsx';

import { Typography } from '../ui';

import styles from './FilmImage.module.scss';

import { filmRelease } from '@/utils/helpers/filmRelease';

interface FilmImageProps {
  className?: string;
  img: string;
  name: string;
  genres: string[];
  country: {
    id: number;
    code: string;
    code2: string;
    name: string;
  };
  releaseDate: string;
}

export const FilmImage = ({
  className,
  img,
  name,
  genres,
  country,
  releaseDate
}: FilmImageProps) => {
  return (
    <div className={clsx(styles.imageBlock, className)}>
      <img src={`${import.meta.env.VITE_BASE_URL}${img}`} alt={`Фильм ${name}`} />
      <div className={styles.info}>
        <Typography component='p' variant='paragraph-Roboto-600' color='primary'>
          {genres[0]}
        </Typography>
        <Typography component='p' variant='paragraph-Roboto-400' color='primary'>
          {filmRelease(country.name, releaseDate)}
        </Typography>
      </div>
    </div>
  );
};
