import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { ChevronLeft, InboxRounded, MailRounded } from '@mui/icons-material'
import { AccountBalanceWalletRounded, HistoryRounded, NotesRounded, LaunchRounded, CategoryRounded } from "@mui/icons-material";
const MainLayout = () => {
  const menu = [
    {
      title: 'Счет',
      url: '/account',
      icon: () => <AccountBalanceWalletRounded />
    },
    {
      title: 'История',
      url: '/account',
      icon: () => <HistoryRounded />
    },
    {
      title: 'Планирование',
      url: '/account',
      icon: () => <NotesRounded />
    },
    {
      title: 'Новая запись',
      url: '/account',
      icon: () => <LaunchRounded />
    },
    {
      title: 'Категории',
      url: '/account',
      icon: () => <CategoryRounded />
    }
  ]
  return (
    <>
      <Button>Click me</Button>
      <Drawer
        anchor="left"
        // open={true}
        variant="permanent"
      >

        <IconButton >
          <ChevronLeft />
        </IconButton>
        <Divider />
        <List>
          {menu.map((item) => (
            <ListItem button key={item.title}>
              <ListItemIcon>
                {item.icon()}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  )
}

export default MainLayout