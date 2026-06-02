import React, { createContext, useMemo } from "react";
import type { CrtTheme } from "../contracts/theme";
import { defaultTheme } from "../themes/default";

type ThemeProviderProps = {
    theme?: CrtTheme
    children: React.ReactNode
}

const ThemeContext = createContext<CrtTheme|null>(null);

export function ThemeProvider({ theme = defaultTheme, children }: ThemeProviderProps) {
    const cssVariables = useMemo(() => {
    return {
        "--crt-bg-color": theme.bg,

        "--crt-default-color": theme.default.color,
        "--crt-default-glow": theme.default.glow,

        "--crt-warning-color": theme.warning.color,
        "--crt-warning-glow": theme.warning.glow,

        "--crt-error-color": theme.error.color,
        "--crt-error-glow": theme.error.glow,
    } as React.CSSProperties;
  }, [theme]);

  return (
    <ThemeContext.Provider value={ theme }>
        <div style={ cssVariables }>{ children }</div>
    </ThemeContext.Provider>
  )
}