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

    const classes = [
        styles.button,
        styles[`button--${variant}`],
        styles[`button--theme-${theme}`],
        glow ? styles['button--glow'] : '',
        styles[`button--${width}`],
        styles[`button--hover-${hover}`]
    ].join(' ');

    return (
        <button className={ classes } onClick={ action } disabled={ disabled } type={ type }>
            {children}
        </button>
    )
}
