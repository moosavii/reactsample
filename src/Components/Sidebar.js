import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';

import StickyNote2Outlined from '@mui/icons-material/StickyNote2Outlined';
import Drafts from '@mui/icons-material/Drafts';
import Telegram from '@mui/icons-material/Telegram';
import { AccessibilityNew, Person } from '@mui/icons-material';
import SimpleDialog from './SimpleDialog';
import { Dialog, DialogTitle } from '@mui/material';
import Ticket from './Ticket';


const drawerWidth = 240;





const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    /* به کلاس سی اس اس یک سری موارد می افزاییم */
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(0),/*  در حالت موبایل */
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(0),
        },
      }),
    },
  }),
);


export default function SideBar({ sideBarOpen }) {

  const[showDialog , setShowDialog] = React.useState("");


  const closeDialog = () =>
  { 
    setShowDialog("");
  }
  const mainListItems = (
    <>
  
      <ListItem button key={"new"} onClick = {() => setShowDialog("newTicket")}>
        <ListItemIcon >
          <AddBoxOutlined />
        </ListItemIcon>
        <ListItemText primary={"جدید"} />
      </ListItem>
  
      <ListItem button key={"private"}>
        <ListItemIcon>
          <StickyNote2Outlined />
        </ListItemIcon>
        <ListItemText primary={"شخصی"} />
      </ListItem>
  
      <ListItem button key={"inbox"}>
        <ListItemIcon>
          <Drafts />
        </ListItemIcon>
        <ListItemText primary={"دریافتی"} />
      </ListItem>
  
      <ListItem button key={"sent"}>
        <ListItemIcon>
          <Telegram />
        </ListItemIcon>
        <ListItemText primary={"ارسالی"} />
      </ListItem>
  
      <ListItem>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="گزارشات" />
      </ListItem>
  
  
  
      <Divider sx={{ my: 1 }} />
  
  
  
      <ListItem button key={"users"}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary={"کاربران"} />
      </ListItem>
  
      <ListItem button key={"groups"}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={"گروه ها"} />
      </ListItem>
  
      <ListItem button key={"access"}>
        <ListItemIcon>
          <AccessibilityNew />
        </ListItemIcon>
        <ListItemText primary={"دسترسی ها"} />
      </ListItem>
  
      <Divider sx={{ my: 1 }} />
  
  
      <ListItem button key={"users2"}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary={"کاربران"} />
      </ListItem>
  
      <ListItem button key={"groups2"}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={"گروه ها"} />
      </ListItem>
  
      <ListItem button key={"access2"}>
        <ListItemIcon>
          <AccessibilityNew />
        </ListItemIcon>
        <ListItemText primary={"zدسترسی ها"} />
      </ListItem>
  
      <Divider sx={{ my: 1 }} />
    </>
  )

  return (
    <>
      <Drawer variant="permanent" open={sideBarOpen} sx={{ height: 'calc(100vh - 65px)', overflow: 'auto', marginTop: '65px' }}>
        <Divider />
        <List component="nav">
          {mainListItems}
        </List>
      </Drawer>

      <Dialog onClose={closeDialog} open={showDialog == "newTicket"}>
        <DialogTitle>
          ثبت تیکت جدید
        </DialogTitle>
        <Ticket />
      </Dialog>
    </>
  );
}

