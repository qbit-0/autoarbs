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
    <Box position="relative" py={8}>
      <Box
        position="absolute"
        left="50%"
        width="100%"
        component="img"
        src="images/Sport with colored background + transition.png"
        sx={{ transform: "translateX(-50%)" }}
      />
      <Box component={Container} position="relative" mt={16} zIndex={10}>
        <Grid container rowSpacing={16} columnSpacing={2}>
          <Grid xs={12}>
            <Stack
              flexGrow={1}
              direction="row"
              justifyContent="center"
              alignItems="end"
              spacing={2}
            >
              <Box
                component="img"
                src="images/Logo AA.png"
                alt="logo"
                height={75}
              />
              <Typography
                variant="h1"
                color="white"
                fontWeight={900}
                lineHeight={0.7}
              >
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
                  image="/images/Javelin throw - Basketball - Football - Athletics - Tennis.png"
                  sx={{ height: 400 }}
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
                  days.
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
                image="images/No luck needed, four leaf clover one on the ground.png"
                title="deposit"
                sx={{ height: 600 }}
              />
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Stack spacing={2}>
                    <CardTitle>Luck? We don't need luck.</CardTitle>
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
            </Card>
          </Grid>
          {userData ? (
            <Grid xs={12}>
              <Card>
                <CardMedia
                  image="https://picsum.photos/1000/1000"
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
                  <CardMedia image="images/Sign up.jpg" sx={{ height: 300 }} />
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
                  <CardMedia image="images/login.jpg" sx={{ height: 300 }} />
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
