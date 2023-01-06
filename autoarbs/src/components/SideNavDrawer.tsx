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
import { Page } from "../App";

type Props = { shownPages: Page[] } & ComponentProps<typeof Drawer>;

const SideNavDrawer: FC<Props> = ({ shownPages, ...props }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Drawer {...props}>
      <Box sx={{ width: 250 }}>
        <List>
          {shownPages.map((page) => (
            <ListItem key={page.name}>
              <ListItemButton
                selected={page.path === location.pathname}
                onClick={() => {
                  navigate(page.path);
                  if (props.onClose) props.onClose({}, "backdropClick");
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
