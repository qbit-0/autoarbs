import { Box, Container, Grid, Typography } from "@mui/material";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";
import AdminUsersCard from "../cards/AdminUsersCard";
import AdminUserTransactionCard from "../cards/AdminUserTransactionCard";

type Props = {};

const AdminPage = (props: Props) => {
  const userData = useAutoUpdateUserData();

  if (!userData) return null;

  return (
    <Box py={16}>
      <Container>
        <Typography variant="h1" gutterBottom>
          Admin Panel
        </Typography>
        <Grid container spacing={4}>
          <Grid xs={12}>
            <AdminUsersCard />
          </Grid>
          <Grid xs={12}>
            <AdminUserTransactionCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminPage;
