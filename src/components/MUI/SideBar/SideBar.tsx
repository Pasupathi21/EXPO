import React from 'react'

// ************ MUI
// import { MuiDrawer } from '@mui/material'
import { Drawer, List, } from '@mui/material'
import { styled , useTheme} from '@mui/system'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// component *********************
import { SideBarBox } from '../Box/Box'
import { SideBarMenus } from './SideBarMenus/SideBarMenu'
import './sidebar.scss'

// const SideBarDrawer = styled(Drawer)(({ theme }) => ({}))

export const SideBar = () => {
    const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return <SideBarBox className="sidebar sidebar__hieght--adjust">
        <SideBarMenus />
    </SideBarBox>
}