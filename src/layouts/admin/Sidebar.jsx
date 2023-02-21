import React from 'react'
import { 
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,



} from '@mui/material'
import { Home, Feed, Wysiwyg } from '@mui/icons-material';


export default function Sidebar() {
    return (
      <Box  flex={1}  p={2}>
        <List>
            <ListItem disablePadding>
                <ListItemButton LinkComponent="a" href='#'>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="หน้าแรก" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton LinkComponent="a" href='#'>
                    <ListItemIcon>
                        <Feed />
                    </ListItemIcon>
                    <ListItemText primary="การจัดการ" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton LinkComponent="a" href='#'>
                    <ListItemIcon>
                        <Wysiwyg />
                    </ListItemIcon>
                    <ListItemText primary="รายการสินค้า" />
                </ListItemButton>
            </ListItem>
        </List>

      </Box>
    );
  }