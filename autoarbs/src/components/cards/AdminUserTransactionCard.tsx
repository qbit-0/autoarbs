import { Box, Card, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { DataGrid } from "@mui/x-data-grid";
import { FC } from "react";
import CardTitle from "../CardTitle";

type Props = { email: string };

const AdminUserTransactionCard: FC<Props> = ({ email }) => {
  // const userData = useMemo(() => {}, [email]);

  return (
    <Box component={Card}>
      <CardContent>
        <CardTitle>Transactions</CardTitle>
        <Grid2 container spacing={4}>
          <Grid2 xs={12}>
            <DataGrid columns={[]} rows={[]} />
          </Grid2>
        </Grid2>
      </CardContent>
    </Box>
  );
};

export default AdminUserTransactionCard;
