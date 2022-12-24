import { Box, Container, Typography } from "@mui/material";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box component="footer" bgcolor="lightblue">
      <Container>
        <Typography variant="h5">Footer Heading</Typography>
        <Typography>Footer Text</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
