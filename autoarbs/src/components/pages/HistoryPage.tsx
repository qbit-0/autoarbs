import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DepositHistoryCard from "../cards/DepositHistoryCard";
import WithdrawalHistoryCard from "../cards/WithdrawalHistoryCard";

type Props = {};

const HistoryPage = (props: Props) => {
  return (
    <Box py={8}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Transaction History
        </Typography>
        <Grid container spacing={4}>
          <Grid xs={12}>
            <DepositHistoryCard />
          </Grid>
          <Grid xs={12}>
            <WithdrawalHistoryCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HistoryPage;
