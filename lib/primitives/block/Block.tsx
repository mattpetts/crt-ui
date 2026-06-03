import clsx from 'clsx';
import type{ ThemeVariants, BlockDirections } from '../../types';

import styles from './Block.module.css';

interface BlockProps {
    children: React.ReactNode;
    theme?: ThemeVariants;
    direction?: BlockDirections;
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
