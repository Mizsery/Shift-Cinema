import clsx from 'clsx';

import styles from './Button.module.scss';

type ButtonVariants = 'contain' | 'icon' | 'outline';

interface ButtonProps extends React.ComponentProps<'button'> {
  className?: string;
  variant?: ButtonVariants;
}

export const Button = ({ className, variant = 'contain', ...props }: ButtonProps) => {
  return (
    <button type='button' className={clsx(styles.button, styles[variant], className)} {...props} />
  );
};
