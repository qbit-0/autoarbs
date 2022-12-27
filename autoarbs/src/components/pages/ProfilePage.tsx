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
    <Box py={16}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Your Profile
        </Typography>
        <Grid container spacing={4}>
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
