import { createTheme, ThemeOptions } from "@mui/material/styles";
import paletteOptions from "./palette";

const themeOptions: ThemeOptions = {
  palette: paletteOptions,
};

const theme = createTheme(themeOptions);

export default theme;
