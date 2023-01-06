import { Card, CardContent } from "@mui/material";
import CardTitle from "../CardTitle";

type Props = {};

const AdminUserTransactionCard = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <CardTitle>Transactions</CardTitle>
      </CardContent>
    </Card>
  );
};

export default AdminUserTransactionCard;
