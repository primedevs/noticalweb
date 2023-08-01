import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
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
  transitions: {
    create: () => "all 0.3s ease-in-out", // Smooth transition for all elements
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: 10, // Add a border radius of 10px
          transition: "border-color 0.3s ease-in-out", // Smooth transition for border color
          borderColor: "#ccc", // Set the default border color
          "&:hover": {
            borderColor: "#04A54A", // Set hover color to #04A54A
          },
          "&:focus": {
            borderColor: "#04A54A", // Set focus color to #04A54A
            boxShadow: "0 0 3px #aaa", // Add a box shadow on focus
          },
        },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);
export default responsiveTheme;
