import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "'Muli', sans-serif",
    button: {
      textTransform: "none",
      textDecoration: "none",
    },
  },
  palette: {
    primary: { 500: "#04A54A" },
    secondary: { main: "#0B1929" },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 10, // change this line
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
