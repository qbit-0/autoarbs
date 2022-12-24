import { amber, pink } from "@mui/material/colors";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: pink[900],
    },
    secondary: {
      main: amber[400],
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
