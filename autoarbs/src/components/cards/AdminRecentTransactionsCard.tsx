import { Card, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { DataGrid } from "@mui/x-data-grid";
import CardTitle from "../CardTitle";

type Props = {};

const AdminRecentTransactionsCard = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <CardTitle>Recent Transactions</CardTitle>
        <Grid2 container spacing={4}>
          <Grid2 xs={12}>
            <DataGrid columns={[]} rows={[]} />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default AdminRecentTransactionsCard;
