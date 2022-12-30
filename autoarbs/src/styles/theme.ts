import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import components from "./components";
import palette from "./palette";
import typography from "./typography";

const themeOptions: ThemeOptions = {
  components,
  palette,
  typography,
  shape: { borderRadius: 8 },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;
