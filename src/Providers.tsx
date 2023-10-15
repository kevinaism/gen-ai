import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { CustomTheme } from "./components/theme/Theming";
import Router from "./Router";
import "react-toastify/dist/ReactToastify.css";

export const Providers = () => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Router />
    </ThemeProvider>
  );
};
