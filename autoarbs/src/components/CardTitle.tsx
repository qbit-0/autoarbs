import { Typography } from "@mui/material";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<typeof Typography>;

const CardTitle: FC<Props> = (props: Props) => {
  return <Typography variant="h4" gutterBottom {...props} />;
};

export default CardTitle;
