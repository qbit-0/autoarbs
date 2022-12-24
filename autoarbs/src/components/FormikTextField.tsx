import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { ComponentProps, FC } from "react";

type Props = { name: string } & ComponentProps<typeof TextField>;

const FormikTextField: FC<Props> = ({ name, ...other }) => {
  const { touched, values, errors, handleChange, handleBlur } =
    useFormikContext<any>();

  return (
    <TextField
      value={values[name]}
      error={touched[name] && Boolean(errors[name])}
      onChange={handleChange(name)}
      onBlur={handleBlur}
      helperText={touched[name] && (errors[name] as string)}
      fullWidth
      {...other}
    />
  );
};

export default FormikTextField;
