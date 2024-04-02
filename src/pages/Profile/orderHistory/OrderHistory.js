import React, { useState } from "react";
import { Box } from "@mui/material";
import { OrderHistoryList } from "./orderHistoryList";

export const OrderHistory = () => {
  const [isMyOrderHistory, setIsMyOrderHistory] = useState(true);
  return (
    <>
      {isMyOrderHistory ? (
        <OrderHistoryList />
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
