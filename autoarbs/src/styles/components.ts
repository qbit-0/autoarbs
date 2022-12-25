import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiCard: {
    styleOverrides: {
      root: {
        flex: "1 1 0",
        display: "flex",
        flexDirection: "column",
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        flex: "1 1 0",
      },
    },
  },
};

export default components;
