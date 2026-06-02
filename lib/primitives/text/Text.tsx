import type { ReactNode } from "react";
import styles from './Text.module.css';

interface TextProps {
    children: ReactNode;
    variant?: "default" | "warning" | "error";
    glow?: boolean
}

export default function Text({ children, variant = 'default', glow = false }: TextProps) {

    const classes = [
        styles.text,
        styles[`text--${variant}`],
        glow && styles["text--glow"],

    ].filter(Boolean).join(' ');

    return (
        <p className={ classes }>{ children }</p>
    )
}

