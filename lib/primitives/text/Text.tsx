import clsx from 'clsx';

import type { AllowedTextElements } from "../../types/primitives/text";
import type { ThemeVariants } from "../../types/theme";

import styles from './Text.module.css';

interface TextProps<T extends AllowedTextElements = "p"> {
    children: React.ReactNode;
    as?: T;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    color?: 'inherit' | ThemeVariants;
}

export default function Text<T extends AllowedTextElements = "p">({
    as,
    children,
    size,
    color = 'inherit'
}: TextProps<T>) {
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

