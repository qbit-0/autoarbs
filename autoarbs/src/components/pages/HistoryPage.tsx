import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import DepositHistoryCard from "../cards/DepositHistoryCard";
import WithdrawalHistoryCard from "../cards/WithdrawalHistoryCard";

type Props = {};

const HistoryPage = (props: Props) => {
  return (
    <Box py={16}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Transaction History
        </Typography>
        <Grid2 container spacing={4}>
          <Grid2 xs={12}>
            <DepositHistoryCard />
          </Grid2>
          <Grid2 xs={12}>
            <WithdrawalHistoryCard />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default HistoryPage;
