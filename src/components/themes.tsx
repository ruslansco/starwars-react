import { ThemeProvider, createTheme } from "@mui/material/styles";
// A custom theme for this app

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    // background: {
    //   default: "#fff",
    // }
  }
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    }
    // background: {
    //   default: "#fff",
    // }
  }
});

const themes = {
  dark: darkTheme,
  light: lightTheme
};

export default themes;
