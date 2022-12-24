import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ComponentProps, FC } from "react";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../App";
import useAutoUpdateUserData from "../hooks/useAutoUpdateUserData";

type Props = ComponentProps<typeof Drawer>;

const SideNavDrawer: FC<Props> = (props) => {
  const userData = useAutoUpdateUserData();
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
                onClick={() => {
                  navigate(page.path);
                }}
              >
                <ListItemText>{page.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNavDrawer;
