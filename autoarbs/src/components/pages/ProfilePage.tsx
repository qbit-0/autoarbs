import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
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
        <Grid2 container spacing={4}>
          <Grid2 xs={12}>
            <AccountInfoCard />
          </Grid2>
          <Grid2 xs={12}>
            <AccountSettingsCard />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default ProfilePage;
