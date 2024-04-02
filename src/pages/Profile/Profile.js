import React, { useState } from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { AddressSection } from "./address/Address";
import { MyOrders } from "./myOrders/MyOrders";
import { OrderHistory } from "./orderHistory/OrderHistory";

export const Profile = () => {
  const [selectedButton, setSelectedButton] = useState("Order History");
  return (
    <Box mt={15} mx={10}>
      <Box>
        <Typography>Account</Typography>
      </Box>
      <Box mt={2}>
        <Typography>Rushikesh Bagal</Typography>
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
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button
            onClick={() => {
              setSelectedButton("Order History");
            }}
          >
            Order History
          </Button>
          <Button
            onClick={() => {
              setSelectedButton("Saved Address");
            }}
          >
            Saved Address
          </Button>
          <Button
            onClick={() => {
              setSelectedButton("My Orders");
            }}
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
