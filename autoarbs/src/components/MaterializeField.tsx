import { Field, useFormikContext } from "formik";
import { ComponentProps, FC, ReactNode } from "react";

type Props = {
  type?: string;
  name: string;
  children?: ReactNode;
} & ComponentProps<typeof Field>;

const MaterializeField: FC<Props> = ({ type, name, children, ...other }) => {
  const { errors } = useFormikContext<any>();

  return (
    <Field
      className={errors[name] ? "invalid" : "valid"}
      type={type}
      id={name}
      name={name}
      {...other}
    >
      {children}
    </Field>
  );
};

export default MaterializeField;
