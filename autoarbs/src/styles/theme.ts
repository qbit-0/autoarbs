import { amber, pink } from "@mui/material/colors";
import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
} from "@mui/material/styles";

const paletteOptions: PaletteOptions = {
  primary: {
    main: pink[900],
  },
  secondary: {
    main: amber[400],
  },
};

const themeOptions: ThemeOptions = {
  palette: paletteOptions,
};

const theme = createTheme(themeOptions);

export default theme;
