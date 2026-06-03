import clsx from 'clsx';

import styles from './Button.module.css';
import type { ThemeVariants } from '../../types/theme';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    width?: 'full' | 'fit';
    theme?: ThemeVariants;
    action?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    glow?: boolean;
    hover?: 'glitch' | 'scanline' | 'fill'
}


export default function Button({
    variant = 'primary',
    theme = 'default',
    action, 
    children, 
    disabled = false,
    type = 'button',
    glow = false,
    width = 'fit',
    hover = 'glitch'
}: ButtonProps) {

    const classes = clsx(
        styles.button,
        variant && styles[`button--${variant}`],
        theme && styles[`button--theme-${theme}`],
        glow && styles['button--glow'],
        width && styles[`button--${width}`],
        hover && styles[`button--hover-${hover}`]
    )

    return (
        <button className={ classes } onClick={ action } disabled={ disabled } type={ type }>
            {children}
        </button>
    )
}
