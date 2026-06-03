import clsx from "clsx";
import styles from './GenericInput.module.css';

import type { GenericInputTypes, ThemeVariants } from "../../../types";

interface InputProps {
    name: string;
    value?: any;
    type?: GenericInputTypes,
    theme?: ThemeVariants
}

export function GenericInput(
{
    name,
    value,
    type = 'text',
    theme = 'default'
}: InputProps) {

    const classes = clsx(
        styles.input,
        type && styles[`input--${type}`],
        theme && styles[`input--theme-${theme}`]
    )

    return (
        <input 
            name={ name }
            defaultValue={ value } 
            type={ type }
            className={ classes }
        />
    )
}
