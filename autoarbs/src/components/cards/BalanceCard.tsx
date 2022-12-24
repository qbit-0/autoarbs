import { Button, Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUserData } from "../../features/account/accountSlice";
import Grid from "@mui/material/Unstable_Grid2";

type Props = {};

const BalanceCard = (props: Props) => {
  const userData = useAppSelector(selectUserData);

  if (!userData) return null;

  const balance = userData?.balance;
  const deposited = userData.totalDeposit;
  const withdrawn = userData.totalWithdrawal;

  const profit = balance + withdrawn - deposited;
  const profitPercent = deposited === 0 ? 0 : (profit / deposited) * 100;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h2">Balance</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h2" textAlign="end">
              ${balance}
            </Typography>
          </Grid>

          <Grid xs={6}>
            <Typography variant="h4">Total Deposited</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h4" textAlign="end">
              ${deposited}
            </Typography>
          </Grid>

          <Grid xs={6}>
            <Typography variant="h4">Total Withdrawn</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h4" textAlign="end">
              ${withdrawn}
            </Typography>
          </Grid>

          <Grid xs={6}>
            <Typography variant="h4">Total Profit</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h4" textAlign="end">
              {profitPercent.toFixed(2)}%
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Link to="/history">
          <Button>View History</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BalanceCard;
