import { useRouter } from '@tanstack/react-router';
import clsx from 'clsx';

import styles from './GoBack.module.scss';

import GoBackIcon from '@/assets/icons/goBack.svg?react';
import { Button, Typography } from '@/components';

interface GoBackProps {
  className?: string;
}

export const GoBack = ({ className }: GoBackProps) => {
  const router = useRouter();

  return (
    <Button
      type='button'
      variant='icon'
      className={clsx(styles.button, className)}
      onClick={() => router.history.go(-1)}
    >
      <GoBackIcon />
      <Typography variant='paragraph-16-500' color='tertiary'>
        Назад
      </Typography>
    </Button>
  );
};
