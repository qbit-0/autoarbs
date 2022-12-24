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
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";
import ButtonLink from "../ButtonLink";

type Props = {};

const AboutPage = (props: Props) => {
  const userData = useAutoUpdateUserData();
  const theme = useTheme();

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
            <Card elevation={12} sx={{ bgcolor: theme.palette.primary.main }}>
              <CardContent>
                <Typography variant="h2" color="white" textAlign="center">
                  Doesn't Matter Who Wins.
                  <br />
                  You Win.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Typography variant="body1">
              The dream of every investor, making money without having to worry
              about losing it. AutoArbs is turning this dream into reality. Only
              a few things are stopping you right now, but these can be solved
              easily. Sign up and make an account, log in with your personal
              account and start investing!
              <br />
              <br />
              Make 10% Every 10 Days. Guaranteed.
            </Typography>
          </Grid>
          <Grid xs={12} container spacing={2}>
            <Grid xs={4}>
              <Card>
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h4">1. Make a Deposit</Typography>
                    <img src="images/deposit.jpeg" alt="piggybank" />
                    <Typography variant="body1">
                      We make it easy. Sign up and make an account, log in with
                      your personal account and start investing!
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h4">2. Grow Your Money</Typography>
                  <Typography variant="body1">
                    We reinvest your money every day. Averaging around 1% profit
                    per day.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card>
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h4">3. Reap the Profits</Typography>
                    <img src="images/profit.jpeg" alt="moneyplant" />
                    <Typography variant="body1">
                      We guarantee at least 10% profit on your investment after
                      10 days.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
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
            <Grid xs={12} container spacing={2}>
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
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
