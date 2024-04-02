import React, { useState } from "react";
import { Box } from "@mui/material";
import { OrderStatus } from "./OrderStatus";

export const MyOrders = () => {
  const [isMyOrders, setIsMyOrders] = useState(true);
  return (
    <>
      {isMyOrders ? (
        <OrderStatus />
      ) : (
        <>
          <Box pt={2} sx={{ textAlign: "center" }}>
            No Active Orders
          </Box>
        </>
      )}
    </>
  );
};
