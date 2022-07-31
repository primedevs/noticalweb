import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      textDecoration: "none",
    },
  },
  palette: {
    primary: { 500: "#04A54A" },
    secondary: { main: "#263238" },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
