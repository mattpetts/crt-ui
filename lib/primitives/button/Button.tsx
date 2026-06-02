import styles from './Button.module.css'

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    width?: 'full' | 'fit';
    theme?: 'default' | 'warning' | 'error';
    action?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    glow?: boolean;
}


export default function Button({
    variant = 'primary',
    theme = 'default',
    action, 
    children, 
    disabled = false,
    type = 'button',
    glow = false,
    width = 'fit'
}: ButtonProps) {

    const classes = [
        styles.button,
        styles[`button--${variant}`],
        styles[`button--theme-${theme}`],
        glow ? styles['button--glow'] : '',
        styles[`button--${width}`]
    ].join(' ');

    return (
        <button className={ classes } onClick={ action } disabled={ disabled } type={ type }>
            {children}
        </button>
    )
}
