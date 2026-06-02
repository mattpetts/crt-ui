import type { CrtTheme } from "../contracts/theme";

export const defaultTheme: CrtTheme = {
  bg: "#383757",
  default: {
    color: "#00ff41",
    glow: "rgba(0, 255, 65, 0.6)",
  },
  warning: {
    color: "#ffb000",
    glow: "rgba(255, 176, 0, 0.6)",
  },
  error: {
    color: "#ff3b3b",
    glow: "rgba(255, 59, 59, 0.6)",
  },
};