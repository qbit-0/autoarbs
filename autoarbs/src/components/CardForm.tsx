import { Box, BoxProps } from "@mui/material";
import React, { ComponentProps } from "react";
import { Form } from "react-router-dom";

type Props = BoxProps & ComponentProps<typeof Form>;

const CardForm = (props: Props) => {
  return (
    <Box
      component={Form}
      sx={{ flex: "1 1 0", display: "flex", flexDirection: "column" }}
      {...props}
    />
  );
};

export default CardForm;
