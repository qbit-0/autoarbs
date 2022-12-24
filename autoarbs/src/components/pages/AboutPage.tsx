import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";
import ButtonLink from "../ButtonLink";

type Props = {};

const AboutPage = (props: Props) => {
  const userData = useAutoUpdateUserData();

  return (
    <Box py={8}>
      <Container>
        <Grid container spacing={8}>
          <Grid xs={12}>
            <Stack
              flexGrow={1}
              direction="row"
              justifyContent="center"
              spacing={2}
            >
              <img src="PlaceholderLogo.png" alt="logo" width={100} />
              <Typography variant="h1" fontWeight={900}>
                AutoArbs
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Card elevation={12} sx={{ bgcolor: "black" }}>
              <CardContent>
                <Typography variant="h2" color="white" textAlign="center">
                  Put Money In, Get Money Out.
                  <br /> It's That Simple.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Typography variant="body1">
              Make 10% Every 10 Days. Guaranteed.
            </Typography>
          </Grid>
          {userData ? (
            <Grid xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h3">You're already logged in</Typography>
                </CardContent>
                <CardActions>
                  <ButtonLink to="/wallet">Visit Wallet</ButtonLink>
                </CardActions>
              </Card>
            </Grid>
          ) : (
            <>
              <Grid xs={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h3">First time investor?</Typography>
                    <Typography variant="h4">We make it easy</Typography>
                  </CardContent>
                  <CardActions>
                    <ButtonLink startIcon={<PersonAddIcon />} to="/signup">
                      Sign Up
                    </ButtonLink>
                  </CardActions>
                </Card>
              </Grid>
              <Grid xs={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h3">
                      Already have an account?
                    </Typography>
                    <Typography variant="h4">Let's see your profits</Typography>
                  </CardContent>
                  <CardActions>
                    <ButtonLink startIcon={<LoginIcon />} to="/login">
                      Log In
                    </ButtonLink>
                  </CardActions>
                </Card>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
