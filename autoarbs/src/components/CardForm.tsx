import { Box, BoxProps } from "@mui/material";
import { Form } from "formik";
import { ComponentProps } from "react";

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
