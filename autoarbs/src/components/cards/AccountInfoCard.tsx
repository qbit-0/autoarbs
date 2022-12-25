import { Card, CardContent, Stack, Typography } from "@mui/material";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";

type Props = {};

const AccountInfoCard = (props: Props) => {
  const userData = useAutoUpdateUserData();

  if (!userData) return null;

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h3">Info</Typography>
          <Typography>Email: {userData.email}</Typography>
          <Typography>
            Name: {userData.firstName} {userData.lastName}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AccountInfoCard;
