import { createElement, forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.scss';

type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyColor = 'primary' | 'secondary' | 'tertiary' | 'quartenery' | 'invert';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'paragraph-16-500'
  | 'paragraph-16-400'
  | 'paragraph-14'
  | 'paragraph-12'
  | 'paragraph-Roboto-400'
  | 'paragraph-Roboto-600';

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
      variant = 'paragraph-16-400' as TypographyVariant,
      color = 'primary' as TypographyColor,
      className,
      ...props
    }: TypographyProps<Component> & React.ComponentProps<Component>,
    ref: React.ForwardedRef<React.ComponentRef<Component>>
  ) =>
    createElement(component, {
      ref,
      className: clsx(styles[variant], styles[color], className),
      ...props
    })
);
