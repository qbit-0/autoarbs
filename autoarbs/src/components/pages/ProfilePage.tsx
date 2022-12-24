import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";
import AccountInfoCard from "../cards/AccountInfoCard";
import AccountSettingsCard from "../cards/AccountSettingsCard";

type Props = {};

const ProfilePage = (props: Props) => {
  const userData = useAutoUpdateUserData();

  if (!userData) return null;

  return (
    <Box paddingY={8}>
      <Container>
        <Grid container spacing={4}>
          <Grid xs={12}>
            <Typography variant="h1">
              {userData.firstName} {userData.lastName}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <AccountInfoCard />
          </Grid>
          <Grid xs={12}>
            <AccountSettingsCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;
