import { useFormikContext } from "formik";
import { FC } from "react";

type Props = { name: string };

const MaterializeErrorMessage: FC<Props> = ({ name }) => {
  const { errors } = useFormikContext<any>();

  return (
    <span
      className="helper-text"
      data-error={errors[name]}
      data-success=""
    ></span>
  );
};

export default MaterializeErrorMessage;
