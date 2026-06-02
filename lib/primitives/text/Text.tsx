import type { ReactNode } from "react";
import type { AllowedTextElements } from "../../types/primitives/text";
import styles from './Text.module.css';

interface TextProps<T extends AllowedTextElements = "p"> {
    children: ReactNode;
    variant?: "default" | "warning" | "error";
    glow?: boolean;
    as?: T;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function Text<T extends AllowedTextElements = "p">({ 
    children,
    variant = 'default',
    glow = false,
    as,
    size = 'md'
}: TextProps<T>) {

    const Component = as || 'p';

    const classes = [
        styles.text,
        styles[`text--${variant}`],
        glow && styles["text--glow"],
        styles[`text--${size}`]

    ].filter(Boolean).join(' ');

    return (
        <Component className={ classes }>{ children }</Component>
    )
}

