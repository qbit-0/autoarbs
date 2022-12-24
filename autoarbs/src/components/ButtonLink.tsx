import { Button } from "@mui/material";
import { ComponentProps, FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = { to: string } & ComponentProps<typeof Button>;

const ButtonLink: FC<Props> = ({ to, ...other }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Button
      variant={location.pathname === to ? "outlined" : "text"}
      onClick={() => {
        navigate(to);
      }}
      {...other}
    />
  );
};

export default ButtonLink;
