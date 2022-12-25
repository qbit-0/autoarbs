import { Card, CardContent, Typography } from "@mui/material";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";
import CardTitle from "../CardTitle";

type Props = {};

const AccountInfoCard = (props: Props) => {
  const userData = useAutoUpdateUserData();

  if (!userData) return null;

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <CardTitle>Info</CardTitle>
        <Typography variant="h6">Email: {userData.email}</Typography>
        <Typography variant="h6">
          Name: {userData.firstName} {userData.lastName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AccountInfoCard;
