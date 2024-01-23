import { AppBar, Box, Grid } from "@mui/material";
import SideBar from "./Layout/SideBar";
import Header from "./Layout/Header";
import { useState } from "react";
import { InventoryManagement } from "./InventoryManagement";
import { AddProduct } from "./AddProduct";
import { AddCategory } from "./AddCategory";
import { PriceUpdate } from "./PriceUpdate";

const drawerWidth = 270;

const DashboardHome = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("Inventory Management");

  // const [auth, setAuth] = React.useState(true);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };
  return (
    <Box mb={15}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Header />
      </AppBar>
      <Grid container>
        <Grid item sx={{ maxWidth: drawerWidth }}>
          <SideBar
            drawerWidth={drawerWidth}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </Grid>
        <Grid item sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
          {selectedTab === "Inventory Management" ? (
            <InventoryManagement />
          ) : selectedTab === "Add New Product" ? (
            <AddProduct />
          ) : selectedTab === "Add New Category" ? (
            <AddCategory />
          ) : selectedTab === "Price Update" ? (
            <PriceUpdate />
          ) : selectedTab === "Sales Chart" ? (
            <></>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default DashboardHome;
