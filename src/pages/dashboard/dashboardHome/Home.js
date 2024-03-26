import { AppBar, Box, Grid } from "@mui/material";
import SideBar from "../Layout/SideBar";
import Header from "../Layout/Header";
import { useState } from "react";
import { InventoryManagement } from "../InventoryManagement/InventoryManagement";
import { ManageProduct } from "../productManagement/ManageProduct";
import { ManageCategory } from "../categoryManagement/ManageCategory";
import { SalesChart } from "../salesChart/SalesChart";
import { Orders } from "../orders/Orders";

const drawerWidth = 270;

const DashboardHome = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("Inventory Management");
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
        <Grid
          item
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            backgroundColor: "#f9f9f9",
          }}
        >
          {selectedTab === "Inventory Management" ? (
            <InventoryManagement />
          ) : selectedTab === "Product Management" ? (
            <ManageProduct />
          ) : selectedTab === "Category Management" ? (
            <ManageCategory />
          ) : selectedTab === "Sales Chart" ? (
            <SalesChart />
          ) : selectedTab === "Orders" ? (
            <Orders />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default DashboardHome;
