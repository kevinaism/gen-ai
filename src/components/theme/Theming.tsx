import { createTheme } from "@mui/material";

export const CustomTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1900,
    },
  },
  palette: {
    mode: "light",
    background: {
      default: "rgb(23, 39, 51)",
    },
    primary: {
      main: "rgb(23, 39, 51)",
    },
    secondary: {
      main: "#dc3545",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(23, 39, 51)", 
        },
      },
    },
  },
  mixins: {
    toolbar: {
      height: "60px",
    },
  },
});
