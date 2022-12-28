import { Box, Container, Typography, useTheme } from "@mui/material";

type Props = {};

const Footer = (props: Props) => {
  const theme = useTheme();

  return (
    <Box component="footer" bgcolor={theme.palette.primary.main}>
      <Box py={2}>
        <Container>
          <Typography variant="h5" color="white">
            AutoArbs
          </Typography>
          <Typography color="white">
            We bring arbitrage sports-betting to everyone. Guaranteed profits,
            withdraw anytime.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
