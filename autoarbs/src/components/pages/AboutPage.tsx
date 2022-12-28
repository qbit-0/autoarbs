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
import CardTitle from "../CardTitle";

type Props = {};

const AboutPage = (props: Props) => {
  const userData = useAutoUpdateUserData();
  const theme = useTheme();

  return (
    <Box position="relative">
      <Box
        position="absolute"
        width="100%"
        height={500}
        bgcolor={theme.palette.primary.main}
      />
      <Box component={Container} position="relative" mt={20} pb={8} zIndex={10}>
        <Grid container rowSpacing={[8, 16]} columnSpacing={2}>
          <Grid xs={12}>
            <Typography
              variant="h1"
              color="white"
              fontWeight={900}
              lineHeight={0.7}
              textAlign="center"
              mx="auto"
            >
              AutoArbs
            </Typography>
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
                  image="/images/Javelin throw - Basketball - Football - Athletics - Tennis.png"
                  sx={{ height: 400 }}
                />
              </Card>
            </Container>
          </Grid>
          <Grid xs={12}>
            <Typography variant="body1">
              Put money in. Get money out. It's that simple. We're a
              sports-betting app that guarantees profits. That's right, no luck
              is involved. No risk of losing your money if the other team wins.
              How? We utilize a system that automates arbitrage betting. Usually
              only avialble to programmers and experienced bettors, we intend to
              make arbitrage betting to everyone.
              <br />
              <br />
              We guarantee that you will make 10% of your investment every 10
              Days. And that's a promise.
            </Typography>
          </Grid>
          <Grid xs={12} md={4} display="flex">
            <Card variant="outlined">
              <CardMedia
                image="images/Piggy bank.png"
                title="deposit"
                sx={{ height: 300 }}
              />
              <CardContent>
                <CardTitle variant="h4">Make your deposit</CardTitle>
                <Typography variant="body1">
                  We make it easy. Sign up and make an account, log in with your
                  personal account and start investing!
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} md={4} display="flex">
            <Card variant="outlined">
              <CardMedia
                image="images/money tree triple.png"
                title="grow"
                sx={{ height: 300 }}
              />
              <CardContent>
                <CardTitle variant="h4">Grow your money</CardTitle>
                <Typography variant="body1">
                  We reinvest your money every day. Averaging around 1% profit
                  per day. You can withdraw anytime. And we promise that you
                  will never, ever lose money.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} md={4} display="flex">
            <Card variant="outlined">
              <CardMedia
                image="images/Profit .png"
                title="profit"
                sx={{ height: 300 }}
              />

              <CardContent>
                <CardTitle variant="h4">Reap your profits</CardTitle>
                <Typography variant="body1">
                  We guarantee at least 10% profit on your investment after 10
                  days. This guarantee refreshes every 10 days, meaning that you
                  will make even more profit after every round.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card variant="outlined">
              <CardMedia
                image="https://c8.alamy.com/comp/TAP9B3/seamless-pattern-of-playing-cards-falling-in-various-positions-diamonds-spades-hearts-aces-flat-vector-illustration-TAP9B3.jpg"
                title="deposit"
                sx={{ height: 200 }}
              />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Stack spacing={2}>
                    <CardTitle>Luck? We don't need luck.</CardTitle>
                    <Typography variant="body1">
                      Here's how sports betting normally works. You put money on
                      your favorite team. If they win, you get a paycheck. But
                      if they lose, you lose your investment. It's fun, we
                      admit. But it's a lottery. AutoArbs is the opposite of
                      this.
                      <br />
                      <br />
                      Using our proprietary state-of-the-art arbitrage betting
                      software, we quicky and efficently identify favorable
                      discrepancies in betting odds between bookies. Then, we
                      make a bet on both teams. When the dust settles and one
                      team emerges victorious, we make a profit no matter who
                      wins. That's the secret of arbitrage. It's perfectly
                      legal. And even encouraged by some bookies.
                      <br />
                      <br />
                      Sounds good? What's the catch? If this is so simple, why
                      aren't more people participating in arbitrage betting?
                      That's because we've made it sound a lot easier than it
                      is. To find arbitrages requires both genius-tier
                      programmers and experienced bettors who can make the most
                      out of every bet. We can handle that part for you. All
                      that's left is for you to start investing.
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          {userData ? (
            <Grid xs={12}>
              <Card>
                <CardMedia
                  image="images/Login_signup Waves.jpg"
                  sx={{ height: 300 }}
                />
                <CardContent>
                  <CardTitle>You're already logged in</CardTitle>
                  <Typography variant="h6">Let's see your profits</Typography>
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
            <>
              <Grid xs={6}>
                <Card>
                  <CardMedia
                    image="images/Login_signup Stripes.jpg"
                    sx={{ height: 300 }}
                  />
                  <CardContent>
                    <CardTitle>First time investor?</CardTitle>
                    <Typography variant="h6">We make it easy</Typography>
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
              </Grid>
              <Grid xs={6}>
                <Card>
                  <CardMedia
                    image="images/Login_signup Waves.jpg"
                    sx={{ height: 300 }}
                  />
                  <CardContent>
                    <CardTitle>Already have an account?</CardTitle>
                    <Typography variant="h6">Let's see your profits</Typography>
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
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutPage;
