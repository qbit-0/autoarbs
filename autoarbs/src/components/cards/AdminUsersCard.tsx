import { Card, CardContent, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import CardTitle from "../CardTitle";

type Props = {};

const AdminUsersCard = (props: Props) => {
  const [email, setEmail] = useState("");

  useEffect(() => {}, [email]);

  return (
    <Card>
      <CardContent>
        <CardTitle>Users List</CardTitle>
        <Grid2 container spacing={4}>
          <Grid2 xs={12}>
            <TextField
              value={email}
              fullWidth
              placeholder="Email"
              label="Email"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default AdminUsersCard;
