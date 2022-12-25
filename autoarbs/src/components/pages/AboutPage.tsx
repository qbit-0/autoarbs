import { AccountBalanceWallet, Login, PersonAdd } from "@mui/icons-material";
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
        <Grid container spacing={16}>
          <Grid xs={12}>
            <Stack
              flexGrow={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <img src="images/AutoArbsPurple.jpeg" alt="logo" height={100} />
              <Typography variant="h1" fontWeight={900}>
                AutoArbs
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Container maxWidth="md">
              <Card elevation={12}>
                <CardContent>
                  <Typography
                    variant="h2"
                    color={theme.palette.secondary.dark}
                    textAlign="center"
                  >
                    Doesn't matter who wins.
                    <br />
                    You win.
                  </Typography>
                </CardContent>
                <CardMedia
                  image="https://picsum.photos/1000/1000"
                  sx={{ height: 300 }}
                />
              </Card>
            </Container>
          </Grid>
          <Grid xs={12}>
            <Typography variant="body1">
              Put money in. Get money out. It's that simple. The dream of every
              investor, making money without having to worry about losing it.
              AutoArbs is turning this dream into reality. Only a few things are
              stopping you right now, but these can be solved easily. Sign up
              and make an account, log in with your personal account and start
              investing!
              <br />
              <br />
              Make 10% Every 10 Days. Guaranteed.
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Stack direction="row" spacing={2}>
              <Card variant="outlined" sx={{ flex: "1 1 0" }}>
                <CardMedia
                  image="images/piggybank.jpeg"
                  title="piggybank"
                  sx={{ height: 300 }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h4">Make your deposit</Typography>
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
              <Card variant="outlined" sx={{ flex: "1 1 0" }}>
                <CardMedia
                  image="images/moneyplant.jpeg"
                  title="moneyplant"
                  sx={{ height: 300 }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h4">Grow your money</Typography>
                    <Typography variant="body1">
                      We reinvest your money every day. Averaging around 1%
                      profit per day. You can withdraw anytime. And we promise
                      that you will never, ever lose money.
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button>Learn More</Button>
                </CardActions>
              </Card>
              <Card variant="outlined" sx={{ flex: "1 1 0" }}>
                <CardMedia
                  image="https://picsum.photos/1000/1000"
                  sx={{ height: 300 }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h4">Reap your profits</Typography>
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
                      Luck? We don't need luck.
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
              <Card sx={{ flex: "1 1 0" }}>
                <CardMedia
                  image="https://picsum.photos/1000/1000"
                  sx={{ height: 300 }}
                />
                <CardContent>
                  <Typography variant="h3">You're already logged in</Typography>
                </CardContent>
                <CardActions>
                  <ButtonLink
                    variant="outlined"
                    startIcon={<AccountBalanceWallet />}
                    to="/wallet"
                  >
                    Visit Wallet
                  </ButtonLink>
                </CardActions>
              </Card>
            </Grid>
          ) : (
            <Grid xs={12}>
              <Stack direction="row" spacing={2}>
                <Card sx={{ flex: "1 1 0" }}>
                  <CardMedia
                    image="https://picsum.photos/1000/1000"
                    sx={{ height: 300 }}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h3">First time investor?</Typography>
                      <Typography variant="h4">We make it easy</Typography>
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <ButtonLink
                      variant="outlined"
                      startIcon={<PersonAdd />}
                      to="/signup"
                    >
                      Sign Up
                    </ButtonLink>
                  </CardActions>
                </Card>
                <Card sx={{ flex: "1 1 0" }}>
                  <CardMedia
                    image="https://picsum.photos/1000/1000"
                    sx={{ height: 300 }}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h3">
                        Already have an account?
                      </Typography>
                      <Typography variant="h4">
                        Let's see your profits
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <ButtonLink
                      variant="outlined"
                      startIcon={<Login />}
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
