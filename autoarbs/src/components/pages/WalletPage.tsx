import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";
import BalanceCard from "../cards/BalanceCard";
import DepositCard from "../cards/DepositCard";
import WithdrawCard from "../cards/WithdrawCard";

type Props = {};

const WalletPage = (props: Props) => {
  const userData = useAutoUpdateUserData();

  if (!userData) return null;

  return (
    <Box py={8}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Welcome back, {userData.firstName}.
        </Typography>
        <Grid container spacing={4}>
          <Grid xs={12}>
            <BalanceCard />
          </Grid>
          <Grid xs={12} md={6}>
            <DepositCard />
          </Grid>
          <Grid xs={12} md={6}>
            <WithdrawCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WalletPage;
