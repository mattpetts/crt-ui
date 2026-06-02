import styles from './Button.module.css'

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    theme?: 'default' | 'warning' | 'error';
    action?: () => void;
    disabled?: boolean
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset'
}


export default function Button({
    variant = 'primary',
    theme = 'default',
    action, 
    children, 
    disabled = false,
    type = 'button'
}: ButtonProps) {

    const classes = [
        styles.button,
        styles[`button--${variant}`],
        styles[`button--theme-${theme}`]
    ].join(' ');

    return (
        <button className={ classes } onClick={ action } disabled={ disabled } type={ type }>
            {children}
        </button>
    )
}
