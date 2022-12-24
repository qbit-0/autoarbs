import { Button, Container, Stack } from "@mui/material";
import OtpCard from "../cards/OtpCard";

type Props = {};

const VerificationPage = (props: Props) => {
  return (
    <Stack
      flexGrow={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="sm">
        <Stack flexDirection="column" spacing={4}>
          <OtpCard />
          <Button>Didn't get the email? Click here to send another.</Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default VerificationPage;
