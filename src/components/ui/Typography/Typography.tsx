import { createElement, forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.scss';

type TypographyComponent = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

type TypographyColor = 'primary' | 'secondary' | 'tertiary' | 'quartenery';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'paragraph-16-500'
  | 'paragraph-16-400'
  | 'paragraph-14'
  | 'paragraph-12';

interface TypographyProps<Component extends TypographyComponent> {
  component?: Component;
  className?: string;
  color?: TypographyColor;
  variant?: TypographyVariant;
}

export const Typography = forwardRef(
  <Component extends TypographyComponent = 'p'>(
    {
      component = 'p' as Component,
      color = 'primary' as TypographyColor,
      variant = 'paragraph-16-400' as TypographyVariant,
      className,
      ...props
    }: TypographyProps<Component> & React.ComponentProps<Component>,
    ref: React.ForwardedRef<React.ComponentRef<Component>>
  ) =>
    createElement(component, {
      ref,
      className: clsx(styles[color], styles[variant], className),
      ...props
    })
);
