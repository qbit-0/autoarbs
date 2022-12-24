import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography flexGrow={1}>{currentPage?.name}</Typography>
          <Stack direction="row" spacing={1}>
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
      <SideNavDrawer open={isDrawerOpen} onClose={handleDrawerClose} />
    </header>
  );
};

export default Header;
