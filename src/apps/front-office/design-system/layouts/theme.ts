import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
  primaryColor: "primary",

  colors: {
    primary: [
      "#f3f4f7",
      "#e5e5e7",
      "#c7c9ce",
      "#a7abb7",
      "#8c92a2",
      "#60687f",
      "#7b8296",
      "#727a92",
      "#555c72",
      "#475066",
    ],
    secondary: [
      "#e6ffff",
      "#d4fafa",
      "#14B9BA",
      "#7ceeef",
      "#5be9e9",
      "#2acbcc",
      "#48e6e7",
      "#3ae5e6",
      "#14b5b6",
      "#009d9e",
    ],
  },
  fontFamily: "'Lato', sans-serif",
});

// CSS variables object, can be access in *.css.ts files
export const vars = themeToVars(theme);
