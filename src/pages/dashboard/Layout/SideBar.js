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
    tabName: "Product Management",
    icon: "AddCircleOutline",
  },
  {
    tabName: "Category Management",
    icon: "LibraryAdd",
  },
  {
    tabName: "Sales Chart",
    icon: "PieChart",
  },
  {
    tabName: "Orders",
    icon: "ShoppingCartCheckoutOutlined",
  },
];

const SideBar = (props) => {
  const {
    drawerWidth,
    selectedTab,
    setSelectedTab,
    setAddCategory,
    setEditCategory,
    setAddProduct,
    setEditProduct,
  } = props;
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
            onClick={() => {
              setSelectedTab(text.tabName);
              if (text.tabName === "Category Management") {
                setAddCategory(false);
                setEditCategory(false);
              }
              if (text.tabName === "Product Management") {
                setAddProduct(false);
                setEditProduct(false);
              }
            }}
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
