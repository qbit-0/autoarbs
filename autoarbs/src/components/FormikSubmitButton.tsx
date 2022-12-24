import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<typeof Button>;

const FormikSubmitButton: FC<Props> = (props) => {
  const { isValidating, isSubmitting } = useFormikContext();
  return (
    <Button
      type="submit"
      disabled={isValidating || isSubmitting}
      fullWidth={true}
      {...props}
    />
  );
};

export default FormikSubmitButton;
