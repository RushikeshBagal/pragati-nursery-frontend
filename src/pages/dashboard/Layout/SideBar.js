import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { AppIcon } from "../../../constants/AppIcon";

const options = [
  {
    tabName: "Inventory Management",
    icon: "Inventory",
  },
  {
    tabName: "Add New Product",
    icon: "AddCircleOutline",
  },
  {
    tabName: "Add New Category",
    icon: "LibraryAdd",
  },
  {
    tabName: "Price Update",
    icon: "PriceChange",
  },
  {
    tabName: "Sales Chart",
    icon: "PieChart",
  },
];

const SideBar = (props) => {
  const { drawerWidth, selectedTab, setSelectedTab } = props;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Pragati Nursery
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ paddingTop: 0 }}>
        {options.map((text, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => setSelectedTab(text.tabName)}
            sx={
              selectedTab === text.tabName
                ? {
                    backgroundColor: "primary.main",
                    color: "primary.background",
                    paddingY: "4px",
                  }
                : { paddingY: "4px" }
            }
          >
            <ListItemButton disableRipple>
              <AppIcon
                name={text.icon}
                sx={
                  selectedTab === text.tabName
                    ? { color: "primary.background", mr: 2 }
                    : { color: "primary.dark", mr: 2 }
                }
              />
              <ListItemText primary={text.tabName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
