import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "'Muli', sans-serif", // Set the font-family to Urbanist
    button: {
      textTransform: "none",
      textDecoration: "none",
    },
  },
  palette: {
    primary: { 500: "#04A54A" },
    secondary: { main: "#0B1929" },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
