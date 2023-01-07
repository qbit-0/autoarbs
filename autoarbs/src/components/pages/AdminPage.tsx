import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";
import AdminUserProfileCard from "../cards/AdminUserProfileCard";
import AdminUsersCard from "../cards/AdminUsersCard";
import AdminUserTransactionCard from "../cards/AdminUserTransactionCard";

type Props = {};

const AdminPage = (props: Props) => {
  const userData = useAutoUpdateUserData();
  const [email] = useState("");

  if (!userData) return null;

  return (
    <Box py={16}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Admin Panel
        </Typography>
        <Grid2 container spacing={4}>
          <Grid2 xs={12}>
            <AdminUsersCard />
          </Grid2>
          <Grid2 xs={12}>
            <AdminUserTransactionCard email={email} />
          </Grid2>
          <Grid2 xs={12}>
            <AdminUserProfileCard email={email} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default AdminPage;
