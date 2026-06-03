import styles from './Block.module.css';
import type { ThemeVariants } from '../../types/theme';

interface BlockProps {
    children: React.ReactNode;
    theme?: ThemeVariants
}

export default function Block({ 
    children,
    theme = 'default'
}: BlockProps) {
    const classes = [
        styles.block,
        styles[`block--theme-${theme}`]
    ].join(' ');

    return (
        <div className={ classes }>
            {children}
        </div>
    )
}
