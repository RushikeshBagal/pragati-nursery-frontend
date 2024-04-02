import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Toolbar,
  IconButton,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";

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

const TAX = 0.18;
const delivery_charges = 100;
const Convenience_fee = 5;

const Cart = () => {
  const CLONE_PRODUCTS = JSON.parse(JSON.stringify(cartList));
  const [products, setProducts] = useState(CLONE_PRODUCTS);
  const [isDraweOpen, setIsDrawerOpen] = useState(true);

  function formatCurrency(value) {
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  }

  const itemCount = products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);

  const subTotal = products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);

  const tax = subTotal * TAX;

  const Total_Bill = subTotal + tax + delivery_charges + Convenience_fee;

  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...products];

    // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
    if (value === "") {
      cloneProducts[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      cloneProducts[index].quantity = valueInt;
    }

    setProducts(cloneProducts);
  };

  const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => {
      return index !== i;
    });

    setProducts(filteredProduct);
  };

  // const total = subTotal - discount + tax;

  return (
    <Drawer
      anchor="right"
      open={isDraweOpen}
      PaperProps={{
        sx: { width: "50%" },
      }}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Toolbar>
        <IconButton onClick={() => setIsDrawerOpen(false)}>
          <ClearIcon />
        </IconButton>
      </Toolbar>
      <Box sx={{ textAlign: "center" }}>
        <Typography>Cart</Typography>
      </Box>
      <Box
        px={2}
        pb={1}
        sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
      >
        <Typography>{itemCount} items in the bag</Typography>
      </Box>
      <Box sx={{ borderTop: "1px solid #ddd" }}>
        {cartList.map((product, index) => (
          <Box px={2}>
            <Grid container spacing={2}>
              <Grid item xs={3} sx={{ marginTop: 3, textAlign: "center" }}>
                <img src={product.image} alt={product.title} />
              </Grid>
              <Grid item xs={3} sx={{ marginTop: 5 }}>
                <Typography>{product.title}</Typography>
              </Grid>
              <Grid item xs={2} sx={{ marginTop: 5, textAlign: "center" }}>
                <TextField
                  id="standard-number"
                  //   label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  sx={{ width: "50px" }}
                  // defaultValue={1}
                  value={product.quantity}
                  onChange={(event) => onChangeProductQuantity(index, event)}
                />
              </Grid>
              <Grid item xs={2} sx={{ marginTop: 5, textAlign: "center" }}>
                <Typography>
                  {formatCurrency(product.price * product.quantity)}
                </Typography>
              </Grid>
              <Grid item xs={2} sx={{ marginTop: 5, textAlign: "center" }}>
                <IconButton onClick={() => onRemoveProduct(index)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
      <Box pl={2} py={2} width="450px">
        <Typography>Order Summary</Typography>
      </Box>
      <Box px={2}>
        <Box p={2} sx={{ border: "1px dashed #000" }}>
          <Typography>Bill Details</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Subtotal</Typography>
            {/* <Typography> &#8377; 662.8</Typography> */}
            {formatCurrency(subTotal)}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Tax (18% GST)</Typography>
            {/* <Typography> &#8377; 0</Typography> */}
            {formatCurrency(tax)}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Delivery Charge</Typography>
            {/* <Typography> &#8377; 0</Typography> */}
            {formatCurrency(delivery_charges)}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Convenience fee</Typography>
            {/* <Typography> &#8377; 0</Typography> */}
            {formatCurrency(Convenience_fee)}
          </Box>
          <Divider sx={{ paddingTop: "8px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "8px",
            }}
          >
            <Typography>Total</Typography>
            {/* <Typography>&#8377; 662.8</Typography> */}
            {formatCurrency(Total_Bill)}
          </Box>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{ position: "absolute", marginTop: "16px" }}
          >
            Procced to Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;
