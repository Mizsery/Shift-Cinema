import clsx from 'clsx';

import styles from './Home.module.scss';

import { Typography } from '@/components/ui';

interface HomeProps {
  className?: string;
}

export const Home = ({ className }: HomeProps) => {
  return (
    <div className={clsx(styles, className)}>
      <Typography variant='h2' color='primary' className={styles.title}>
        Афиша
      </Typography>

      <section className={styles.section}>
        <Typography variant='h1' color='primary'>
          Расписание
        </Typography>
      </section>
    </div>
  );
};
