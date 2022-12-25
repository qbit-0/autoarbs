import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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
        <Grid container spacing={12}>
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
            <Container maxWidth="md">
              <Card elevation={12} sx={{ bgcolor: theme.palette.primary.main }}>
                <CardContent>
                  <Typography variant="h2" color="white" textAlign="center">
                    Doesn't Matter Who Wins.
                    <br />
                    You Win.
                  </Typography>
                </CardContent>
              </Card>
            </Container>
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
          <Grid xs={12}>
            <Stack direction="row" spacing={2}>
              <Card sx={{ flex: "1 1 0" }}>
                <CardMedia
                  image="images/deposit.jpeg"
                  title="piggybank"
                  sx={{ height: 300 }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h4">1. Make a Deposit</Typography>
                    <Typography variant="body1">
                      We make it easy. Sign up and make an account, log in with
                      your personal account and start investing!
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button>Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ flex: "1 1 0" }}>
                <CardMedia
                  image="https://picsum.photos/200/200"
                  sx={{ height: 300 }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h4">2. Grow Your Money</Typography>
                    <Typography variant="body1">
                      We reinvest your money every day. Averaging around 1%
                      profit per day. You will never, ever lose money.
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button>Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ flex: "1 1 0" }}>
                <CardMedia
                  image="images/profit.jpeg"
                  title="moneyplant"
                  sx={{ height: 300 }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h4">3. Reap the Profits</Typography>
                    <Typography variant="body1">
                      We guarantee at least 10% profit on your investment after
                      10 days.
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button>Learn More</Button>
                </CardActions>
              </Card>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Card variant="outlined">
              <CardMedia
                image="https://picsum.photos/1000/1000"
                sx={{ height: 300 }}
              />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Stack spacing={2}>
                    <Typography variant="h3">
                      Luck? We Don't Need Luck.
                    </Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Doloremque repellendus amet dignissimos neque blanditiis
                      hic provident debitis eius beatae. Eum praesentium rerum
                      atque nesciunt perferendis hic aliquid, incidunt dolorem
                      at.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quo nihil similique pariatur, doloremque temporibus quam
                      minus impedit, error repellat, a modi assumenda? Eligendi
                      aliquid tempora beatae magni fugiat, nulla quae!
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
              <CardActions></CardActions>
            </Card>
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
            <Grid xs={12}>
              <Stack direction="row" spacing={2}>
                <Card sx={{ flex: "1 1 0" }}>
                  <CardContent>
                    <Typography variant="h3">First time investor?</Typography>
                    <Typography variant="h4">We make it easy</Typography>
                  </CardContent>
                  <CardActions>
                    <ButtonLink
                      variant="contained"
                      startIcon={<PersonAddIcon />}
                      to="/signup"
                    >
                      Sign Up
                    </ButtonLink>
                  </CardActions>
                </Card>
                <Card sx={{ flex: "1 1 0" }}>
                  <CardContent>
                    <Typography variant="h3">
                      Already have an account?
                    </Typography>
                    <Typography variant="h4">Let's see your profits</Typography>
                  </CardContent>
                  <CardActions>
                    <ButtonLink
                      variant="contained"
                      startIcon={<LoginIcon />}
                      to="/login"
                    >
                      Log In
                    </ButtonLink>
                  </CardActions>
                </Card>
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
