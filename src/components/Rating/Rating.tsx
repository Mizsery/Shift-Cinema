import clsx from 'clsx';

import styles from './Rating.module.scss';

import Star from '@/assets/icons/star.svg?react';

interface RatingProps {
  className?: string;
  rating: string;
}

export const Rating = ({ className, rating }: RatingProps) => {
  const starRating = Math.floor(Number(rating) / 2);

  return (
    <div className={clsx(styles.div, className)}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Star
            key={index}
            className={index < starRating ? styles.active : styles.inactive}
            width={24}
            height={24}
          />
        ))}
    </div>
  );
};
