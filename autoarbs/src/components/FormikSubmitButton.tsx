import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<typeof Button>;

const FormikSubmitButton: FC<Props> = (props) => {
  const { isValid, isValidating, isSubmitting } = useFormikContext();
  return (
    <Button
      type="submit"
      disabled={!isValid || isValidating || isSubmitting}
      {...props}
    />
  );
};

export default FormikSubmitButton;
