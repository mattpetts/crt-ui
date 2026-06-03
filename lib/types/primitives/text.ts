import type { ThemeVariants } from '../theme';

export type AllowedTextElements =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'
  | 'small'
  | 'strong'
  | 'em'
  | 'sup'
  | 'sub';

  export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  export type TextColors = 'inherit' | ThemeVariants;