import { FormControl, FormHelperText, InputLabel, Select } from "@mui/material";
import { useFormikContext } from "formik";
import { ComponentProps, FC } from "react";

type Props = { name: string } & ComponentProps<typeof Select>;

const FormikSelect: FC<Props> = ({ name, ...other }) => {
  const { touched, values, errors, handleChange, handleBlur } =
    useFormikContext<any>();

  return (
    <FormControl
      fullWidth={other.fullWidth !== undefined ? other.fullWidth : true}
    >
      <InputLabel>{other.label}</InputLabel>
      <Select
        value={values[name]}
        error={touched[name] && Boolean(errors[name])}
        onChange={handleChange}
        onBlur={handleBlur}
        {...other}
      />

      <FormHelperText>
        {touched[name] && (errors[name] as string)}
      </FormHelperText>
    </FormControl>
  );
};

export default FormikSelect;
