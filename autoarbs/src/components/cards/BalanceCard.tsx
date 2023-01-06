import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";

type Props = {};

const BalanceCard = (props: Props) => {
  const userData = useAutoUpdateUserData();

  if (!userData) return null;

  const balance = 1000;

  // const totalDeposited = userData.totalDeposit;
  // const totalWithdrawn = userData.totalWithdrawal;

  // const totalProfit = balance + totalWithdrawn - totalDeposited;
  // const totalProfitPercent =
  //   totalDeposited === 0 ? 0 : (totalProfit / totalDeposited) * 100;

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid sm={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Grid sm={12} container>
                  <Grid sm={6}>
                    <Typography variant="h3">Balance</Typography>
                  </Grid>
                  <Grid sm={6}>
                    <Typography variant="h3">${balance}</Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">
                  This is where you money goes when you make a deposit. If
                  you're not currently in the middle of a cycle, you can
                  withdraw this immediately. Otherwise, if you request a
                  withdrawal, your withdrawal will be scheduled at the end of
                  the cycle.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid sm={12}>
            <Typography variant="h4">
              The next cycle will occur at 10:30 am, 3 hours from now.
            </Typography>
            {/* <Typography variant="h4">
              You're in the middle of a cycle. Money in your invested account
              will be transfered back into your balance at the end of the cycle.
            </Typography> */}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button>View Stats</Button>
      </CardActions>
    </Card>
  );
};

export default BalanceCard;
