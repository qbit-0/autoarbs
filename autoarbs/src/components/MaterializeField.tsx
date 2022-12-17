import { Field, useFormikContext } from "formik";
import { FC } from "react";

type Props = { type: string; id: string; name: string };

const MaterializeField: FC<Props> = ({ type, id, name }) => {
  const { errors } = useFormikContext<any>();

  return (
    <Field
      className={errors[name] ? "invalid" : "valid"}
      type={type}
      id={id}
      name={name}
    />
  );
};

export default MaterializeField;
