import { Card, CardContent, Typography } from "@mui/material";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";

type Props = {};

const AccountInfoCard = (props: Props) => {
  const userData = useAutoUpdateUserData();

  if (!userData) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h2">Info</Typography>
        <Typography>{userData.email}</Typography>
      </CardContent>
    </Card>
  );
};

export default AccountInfoCard;
