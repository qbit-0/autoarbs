import { Container, Stack } from "@mui/material";
import AdminLoginCard from "../cards/AdminLoginCard";

type Props = {};

const AdminLoginPage = (props: Props) => {
  return (
    <Stack
      flexGrow={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="sm">
        <Stack flexDirection="column" spacing={4}>
          <AdminLoginCard />
        </Stack>
      </Container>
    </Stack>
  );
};

export default AdminLoginPage;
