import clsx from 'clsx';

import styles from './Block.module.css';
import type { ThemeVariants } from '../../types/theme';

interface BlockProps {
    children: React.ReactNode;
    theme?: ThemeVariants;
    direction?: 'row' | 'col';
}

export default function Block({ 
    children,
    theme = 'default',
    direction = 'col'
}: BlockProps) {

    const classes = clsx(
        styles.block,
        theme && styles[`block--theme-${theme}`],
        direction && styles[`block--${direction}`]
    )

    return (
        <div className={ classes }>
            {children}
        </div>
    )
}
