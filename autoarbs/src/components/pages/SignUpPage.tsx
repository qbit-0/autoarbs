import { Container, Stack } from "@mui/material";
import ButtonLink from "../ButtonLink";
import SignUpCard from "../cards/SignUpCard";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <Stack
      flexGrow={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="sm">
        <Stack flexDirection="column" spacing={4}>
          <SignUpCard />
          <ButtonLink to="/login">Or Log In</ButtonLink>
        </Stack>
      </Container>
    </Stack>
  );
};

export default SignUpPage;
