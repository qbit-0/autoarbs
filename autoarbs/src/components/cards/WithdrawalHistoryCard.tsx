import {
  Card,
  CardContent,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CardActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";

type Props = {};

const WithdrawalHistoryCard = (props: Props) => {
  const userData = useAutoUpdateUserData();
  const [numTransactions, setNumTransactions] = useState(5);

  if (!userData) return null;

  const withdrawals = userData.withdrawalHistory
    .slice()
    .sort((a, b) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);
      if (aDate > bDate) {
        return -1;
      } else if (aDate < bDate) {
        return 1;
      } else {
        return 0;
      }
    })
    .slice(0, numTransactions);

  const handleShowLess = () => {
    setNumTransactions(numTransactions - 5);
  };

  const handleShowMore = () => {
    setNumTransactions(numTransactions + 5);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h2">Deposits</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {withdrawals.map((deposit) => (
                <TableRow>
                  <TableCell>${deposit.amount}</TableCell>
                  <TableCell>
                    {new Date(deposit.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>{deposit.method}</TableCell>
                  <TableCell>{deposit.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions>
        <Button
          className="btn waves-effect waves-light"
          disabled={numTransactions <= 5}
          onClick={handleShowLess}
        >
          Show Less
        </Button>
        <Button
          className="btn waves-effect waves-light"
          disabled={numTransactions >= userData.withdrawalHistory.length}
          onClick={handleShowMore}
        >
          Show More
        </Button>
        <Typography flexGrow={1} textAlign="end">
          Showing {withdrawals.length} transactions.
        </Typography>
      </CardActions>
    </Card>
  );
};

export default WithdrawalHistoryCard;
