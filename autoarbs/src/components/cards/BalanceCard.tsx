import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Slider,
  Stack,
  useTheme,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";

type Props = {};

const BalanceCard = (props: Props) => {
  const userData = useAutoUpdateUserData();
  const theme = useTheme();
  const [investPercent, setInvestPercent] = useState(1);

  if (!userData) return null;

  const balance = 1000;
  const invested = 0;

  const investPercentStr = (investPercent * 100).toFixed(0);
  const reservePercentStr = ((1 - investPercent) * 100).toFixed(0);
  const investing = balance * investPercent;
  const investingStr = investing.toFixed(2);
  const reserving = balance * (1 - investPercent);
  const reservingStr = reserving.toFixed(2);

  // const totalDeposited = userData.totalDeposit;
  // const totalWithdrawn = userData.totalWithdrawal;

  // const totalProfit = balance + totalWithdrawn - totalDeposited;
  // const totalProfitPercent =
  //   totalDeposited === 0 ? 0 : (totalProfit / totalDeposited) * 100;

  const pieData = [
    {
      id: "investing",
      label: "Investing",
      value: investingStr,
    },
    {
      id: "reserving",
      label: "Reserving",
      value: reservingStr,
    },
  ];

  const handleChangeInvestPercent = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) setInvestPercent(value);
  };

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
                  This is where you money goes when you make a deposit. It's
                  also how much you can immediately withdraw. A percentage of
                  this is invested in every cycle and will be transfered into
                  your invested amount.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid sm={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Grid sm={12} container>
                  <Grid sm={6}>
                    <Typography variant="h3">Invested</Typography>
                  </Grid>
                  <Grid sm={6}>
                    <Typography variant="h3">${invested}</Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">
                  In every cycle, a percentage of your balance is transferred
                  into here and is used for arbitrage. Don't worry, it will be
                  transfered back into your balance at the end of the cycle.
                  However, since it's in use, you won't be able to withdraw it
                  until the cycle is over. The more that goes into here, the
                  bigger your profit.
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
          <Grid sm={6}>
            <Typography variant="h4">
              {investPercentStr}% of balance (${investingStr}) will be invested.
            </Typography>
          </Grid>
          <Grid sm={6}>
            <Typography variant="h4">
              {reservePercentStr}% of balance (${reservingStr}) will be
              reserved.
            </Typography>
          </Grid>
          <Grid sm={12}>
            <Stack direction="row" spacing={4}>
              <Typography>Invest Less</Typography>
              <Slider
                value={investPercent}
                min={0}
                max={1}
                step={0.05}
                marks={[
                  { value: 0, label: "0%" },
                  { value: 0.25, label: "25%" },
                  { value: 0.5, label: "50%" },
                  { value: 0.75, label: "75%" },
                  { value: 1, label: "100%" },
                ]}
                onChange={handleChangeInvestPercent}
              />
              <Typography>Invest More</Typography>
            </Stack>
          </Grid>
          <Grid sm={12} height={400}>
            <ResponsivePie
              data={pieData}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              innerRadius={0.25}
              padAngle={2}
              cornerRadius={10}
              colors={[theme.palette.secondary.main, grey[200]]}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                { match: { id: "investing" }, id: "dots" },
                { match: { id: "reserving" }, id: "lines" },
              ]}
              borderWidth={2}
              arcLabelsSkipAngle={20}
              arcLinkLabel="label"
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsThickness={4}
              arcLinkLabelsColor={{ from: "color" }}
              isInteractive
              activeOuterRadiusOffset={10}
              activeInnerRadiusOffset={10}
            />
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
