import React from "react";
import { Box, Grid, Typography } from "@mui/material";

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

export const DeliverySummary = () => {
  function formatCurrency(value) {
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  }
  return (
    <Box sx={{ marginTop: 2 }}>
      <Grid container>
        <Grid item xs={6}>
          <Typography>3 items to arrive</Typography>
          <Box>
            {cartList.map((product, index) => (
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box>
                  <img src={product.image} alt={product.title} />
                </Box>
                <Box pl={2}>
                  <Typography>{product.title}</Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography>
                      {formatCurrency(product.price * product.quantity)}
                    </Typography>
                    <Typography pl={2}>Qty: {product.quantity}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography>Bill Details</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-between",
            }}
          >
            <Typography pr={15}>Subtotal</Typography>
            {formatCurrency(2500)}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-between",
            }}
          >
            <Typography pr={15}>Tax (18% GST)</Typography>
            {formatCurrency(450)}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-between",
            }}
          >
            <Typography pr={15}>Delivery Charge</Typography>
            {formatCurrency(100)}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-between",
            }}
          >
            <Typography pr={15}>Convenience fee</Typography>
            {formatCurrency(5)}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-between",
              paddingTop: "8px",
            }}
          >
            <Typography pr={15}>Total</Typography>
            {formatCurrency(3850)}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
