import React from "react";

// *************** React router dom

import { Link, useNavigate } from "react-router-dom";

// **************** MUI
import { Drawer, List, Box, Tooltip } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// **************** APP_DATA
import { SideBarMenuItems } from "../../../../data/SideBarData";

const STR_LEN = 11;
export const SideBarMenus = () => {
  const navigate = useNavigate()
  return (
    <>
      <List>
        {SideBarMenuItems.map(
          (menu: Record<any, any>) =>
            menu.can_access &&
            (menu.title?.length > STR_LEN ? (
              <Tooltip title={menu.title}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: true ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: true ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      menu.title?.length > STR_LEN
                        ? menu.title?.substr(0, 15) + "..."
                        : menu.title
                    }
                    sx={{ opacity: true ? 1 : 0 }}
                  >
                    {menu?.path && <Link to={menu?.path} />}
                  </ListItemText>
                </ListItemButton>
              </Tooltip>
            ) : (
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: true ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={()=> menu?.path ? navigate(menu?.path): false}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: true ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  primary={menu.title}
                  sx={{ opacity: true ? 1 : 0 }}
                >
                  {console.log('menu?.path',menu?.path)}
                  {/* {menu?.path && <Link to={menu?.path} />} */}
                </ListItemText>
              </ListItemButton>
            ))
        )}
      </List>
    </>
  );
};
