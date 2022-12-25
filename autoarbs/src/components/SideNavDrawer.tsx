import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { ComponentProps, FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGES } from "../App";
import useAutoUpdateUserData from "../hooks/useAutoUpdateUserData";

type Props = ComponentProps<typeof Drawer>;

const SideNavDrawer: FC<Props> = (props) => {
  const theme = useTheme();
  const userData = useAutoUpdateUserData();
  const location = useLocation();
  const navigate = useNavigate();

  const shownPages = PAGES.filter(
    (page) =>
      page.showInNavBar &&
      ((userData && page.allowWhenLoggedIn) ||
        (!userData && page.allowWhenLoggedOut))
  );

  return (
    <Drawer {...props}>
      <Box sx={{ width: 250 }}>
        <List>
          {shownPages.map((page) => (
            <ListItem>
              <ListItemButton
                selected={page.path === location.pathname}
                onClick={() => {
                  navigate(page.path);
                }}
              >
                <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                  {page.icon}
                </ListItemIcon>
                <ListItemText sx={{ color: theme.palette.primary.main }}>
                  {page.name}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNavDrawer;
