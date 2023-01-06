import { Card, CardContent } from "@mui/material";
import CardTitle from "../CardTitle";

type Props = {};

const AdminUsersCard = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <CardTitle>Users List</CardTitle>
      </CardContent>
    </Card>
  );
};

export default AdminUsersCard;
