import { Container, Stack } from "@mui/material";
import AdminSignUpCard from "../cards/AdminSignUpCard";

type Props = {};

const AdminSignUpPage = (props: Props) => {
  return (
    <Stack
      flexGrow={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="sm">
        <Stack flexDirection="column" spacing={4}>
          <AdminSignUpCard />
        </Stack>
      </Container>
    </Stack>
  );
};

export default AdminSignUpPage;
