import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { PAGES } from "../App";
import useAutoUpdateUserData from "../hooks/useAutoUpdateUserData";
import ButtonLink from "./ButtonLink";
import SideNavDrawer from "./SideNavDrawer";

type Props = {};

const Header = (props: Props) => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const userData = useAutoUpdateUserData();

  const shownPages = PAGES.filter(
    (page) =>
      page.showInNavBar &&
      ((userData && page.allowWhenLoggedIn) ||
        (!userData && page.allowWhenLoggedOut))
  );

  const currentPage = PAGES.find((page) => page.path === location.pathname);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header>
      <AppBar position="fixed">
        <Toolbar>
          <Box
            component={IconButton}
            display={["block", "none"]}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={openDrawer}
          >
            <MenuIcon />
          </Box>
          <Typography variant="h6" flexGrow={1}>
            {currentPage?.name}
          </Typography>
          <Stack display={["none", "block"]} direction="row" spacing={2}>
            {shownPages.map((page) => (
              <ButtonLink
                startIcon={page === currentPage ? page.icon : null}
                color="inherit"
                to={page.path}
              >
                {page.name}
              </ButtonLink>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        display={["block", "none"]}
        component={SideNavDrawer}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      />
    </header>
  );
};

export default Header;
