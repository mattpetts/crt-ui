import clsx from 'clsx';
import type { AllowedTextElements, TextColors, TextSizes } from '../../../types';

import styles from './Text.module.css';

interface TextProps {
    children: React.ReactNode;
    as?: AllowedTextElements;
    size?: TextSizes;
    color?: TextColors;
}

export function Text ({
    as,
    children,
    size,
    color = 'inherit'
}: TextProps) {
    const Component = (as || "p");

    const classes = clsx(
        styles.text,
        size && styles[`text--${size}`],
        color && styles[`text--${color}`]
    );

    return (
        <Component className={classes}>
            {children}
        </Component>
    );
}

