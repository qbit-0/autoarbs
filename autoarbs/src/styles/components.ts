import { Theme } from "@emotion/react";
import { Components } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

const components: Components<Omit<Theme, "components">> = {
  MuiGrid2: {
    styleOverrides: {
      root: {
        display: "flex",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
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
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: grey[100],
        color: pink[900],
      },
    },
  },
};

export default components;
