import { AppBar, Box, Grid } from "@mui/material";
import SideBar from "../layout/SideBar";
import Header from "../layout/Header";
import { useState } from "react";
import { InventoryManagement } from "../InventoryManagement/InventoryManagement";
import { ManageProduct } from "../productManagement/ManageProduct";
import { ManageCategory } from "../categoryManagement/ManageCategory";
import { SalesChart } from "../salesChart/SalesChart";
import { Orders } from "../orders/Orders";
import { ContentManagement } from "../contentManagement/contentManagement";

const drawerWidth = 270;

const DashboardHome = () => {
  const [selectedTab, setSelectedTab] = useState("Inventory Management");
  const [showInOut, setShowInOut] = useState({
    product: "",
    show: false,
  });
  const [addCategory, setAddCategory] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
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
            setAddCategory={setAddCategory}
            setEditCategory={setEditCategory}
            setAddProduct={setAddProduct}
            setEditProduct={setEditProduct}
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
            <InventoryManagement
              showInOut={showInOut}
              setShowInOut={setShowInOut}
            />
          ) : selectedTab === "Product Management" ? (
            <ManageProduct
              addProduct={addProduct}
              setAddProduct={setAddProduct}
              editProduct={editProduct}
              setEditProduct={setEditProduct}
            />
          ) : selectedTab === "Category Management" ? (
            <ManageCategory
              addCategory={addCategory}
              setAddCategory={setAddCategory}
              editCategory={editCategory}
              setEditCategory={setEditCategory}
            />
          ) : selectedTab === "Sales Chart" ? (
            <SalesChart />
          ) : selectedTab === "Orders" ? (
            <Orders />
          ) : selectedTab === "Content Management" ? (
            <ContentManagement />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default DashboardHome;
