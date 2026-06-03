import type { ReactNode } from "react";
import type { AllowedTextElements } from "../../types/primitives/text";
import type { ThemeVariants } from "../../types/theme";
import styles from './Text.module.css';

interface TextProps<T extends AllowedTextElements = "p"> {
    children: ReactNode;
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

  const classes = [
    styles.text,
    styles[`text--${size}`],
    styles[`text--${color}`]
].filter(Boolean).join(" ");

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
}

