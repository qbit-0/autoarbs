import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Container, Stack } from "@mui/material";
import ButtonLink from "../ButtonLink";
import LoginCard from "../cards/LoginCard";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <Stack
      flexGrow={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="sm">
        <Stack flexDirection="column" spacing={4}>
          <LoginCard />
          <ButtonLink startIcon={<PersonAddIcon />} to="/signup">
            Or Sign Up
          </ButtonLink>
        </Stack>
      </Container>
    </Stack>
  );
};

export default LoginPage;
