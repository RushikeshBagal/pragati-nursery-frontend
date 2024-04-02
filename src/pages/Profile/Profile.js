import React, { useState } from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { AddressSection } from "./address/Address";
import { MyOrders } from "./myOrders/MyOrders";
import { OrderHistory } from "./orderHistory/OrderHistory";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [selectedButton, setSelectedButton] = useState("Order History");
  const navigate = useNavigate();
  return (
    <Box mt={15} mx={10}>
      <Button
        size="small"
        variant="outlined"
        startIcon={<WestOutlinedIcon />}
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      <Box mt={2}>
        <Typography>Account</Typography>
      </Box>
      <Box mt={2}>
        <Typography sx={{ fontWeight: "600" }}>Rushikesh Bagal</Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>8805660539</Typography>
          <Typography>&nbsp;|&nbsp;</Typography>
          <Typography>rushikeshb@gmail.com</Typography>
        </Box>
      </Box>
      <Box
        my={3}
        sx={{
          border: "1px solid #ddd",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonGroup
          variant="text"
          aria-label="Basic button group"
          sx={{ mt: 1 }}
        >
          <Button
            variant={selectedButton === "Order History" ? "contained" : "text"}
            sx={selectedButton === "Order History" ? { px: 1 } : {}}
            onClick={() => {
              setSelectedButton("Order History");
            }}
            disableElevation
          >
            Order History
          </Button>
          <Button
            variant={selectedButton === "Saved Address" ? "contained" : "text"}
            sx={selectedButton === "Saved Address" ? { px: 1 } : {}}
            onClick={() => {
              setSelectedButton("Saved Address");
            }}
            disableElevation
          >
            Saved Address
          </Button>
          <Button
            variant={selectedButton === "My Orders" ? "contained" : "text"}
            sx={selectedButton === "My Orders" ? { px: 1 } : {}}
            onClick={() => {
              setSelectedButton("My Orders");
            }}
            disableElevation
          >
            My Orders
          </Button>
        </ButtonGroup>
        {selectedButton === "Order History" && <OrderHistory />}
        {selectedButton === "Saved Address" && <AddressSection />}
        {selectedButton === "My Orders" && <MyOrders />}
      </Box>
    </Box>
  );
};
