import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6326ed",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7cf105",
      contrastText: "#020202",
    },
    background: {
      default: "#000000",
      paper: "#141414",
    },
    text: {
      primary: "#7cf105",
      secondary: "#7cf105",
      disabled: "#7cf105",
      hint: "#6326ed",
    },
    divider: "#0a0a0a",
  },
});
