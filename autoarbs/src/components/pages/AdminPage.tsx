import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
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
        <Grid2 container spacing={4}>
          <Grid2 xs={12}>
            <AdminUsersCard />
          </Grid2>
          <Grid2 xs={12}>
            <AdminUserTransactionCard />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default AdminPage;
