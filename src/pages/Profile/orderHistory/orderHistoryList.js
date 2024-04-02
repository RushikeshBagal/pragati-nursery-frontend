import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const cartList = [
  {
    title: "Mango Tree",
    price: 25,
    image: "https://via.placeholder.com/150x100",
    quantity: 2,
  },
  {
    title: "Banana Tree",
    price: 15,
    image: "https://via.placeholder.com/150x100",
    quantity: 2,
  },
  {
    title: "Coconut Tree",
    price: 250,
    image: "https://via.placeholder.com/150x100",
    quantity: 10,
  },
];

export const OrderHistoryList = () => {
  function formatCurrency(value) {
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  }

  return (
    <Box sx={{ margin: 5, border: "1px solid #ddd", borderRadius: "20px" }}>
      {cartList.map((product) => (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box m={3} sx={{ display: "flex", flexDirection: "row" }}>
              <img src={product.image} alt={product.title} />
              <Box>
                <Typography pl={2}>{product.title}</Typography>
                <Typography pl={2}>Qty:&nbsp;{product.quantity}</Typography>
                <Typography pl={2}>Order ID:&nbsp;#24897663</Typography>
              </Box>
            </Box>
            <Box m={3}>{formatCurrency(product.price)}</Box>
          </Box>
          <Box ml={3} mb={3} sx={{ display: "flex", flexDirection: "row" }}>
            <CheckCircleRoundedIcon sx={{ color: "green" }} />
            <Typography> &nbsp;Delivered on March 15, 2024</Typography>
          </Box>
          <Divider />
        </>
      ))}
    </Box>
  );
};
