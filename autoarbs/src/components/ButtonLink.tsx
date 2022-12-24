import { Button } from "@mui/material";
import { ComponentProps, FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = { to: string } & ComponentProps<typeof Button>;

const ButtonLink: FC<Props> = ({ to, ...other }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate(to);
      }}
      {...other}
    />
  );
};

export default ButtonLink;
