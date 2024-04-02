import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import empty from "../../../assets/images/empty cart.png";

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

const Cart = (props) => {
  const { isCartOpen, setIsCartOpen } = props;
  const navigate = useNavigate();
  const CLONE_PRODUCTS = JSON.parse(JSON.stringify(cartList));
  const [products, setProducts] = useState(CLONE_PRODUCTS);

  function formatCurrency(value) {
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  }

  const itemCount = products.reduce((quantity, product) => {
    return quantity + product.quantity;
  }, 0);

  const subTotal = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const tax = subTotal * TAX;

  const Total_Bill = subTotal + tax + delivery_charges + Convenience_fee;

  const onChangeProductQuantity = (index, value) => {
    const cloneProducts = [...products];
    cloneProducts[index].quantity = value;
    setProducts(cloneProducts);
  };

  const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => {
      return index !== i;
    });

    setProducts(filteredProduct);
  };

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      PaperProps={{
        sx: { width: "50%" },
      }}
      onClose={() => setIsCartOpen(false)}
    >
      <Toolbar>
        <IconButton onClick={() => setIsCartOpen(false)}>
          <ClearIcon />
        </IconButton>
      </Toolbar>
      <Box sx={{ textAlign: "center" }}>
        <Typography fontWeight={600}>Cart</Typography>
      </Box>
      <Box
        px={2}
        pb={1}
        sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
      >
        <Typography>{itemCount} items in the bag</Typography>
      </Box>
      <Box sx={{ borderTop: "1px solid #ddd", pt: 1 }}>
        {products.map((product, index) => (
          <Box px={2} key={index}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3}>
                <img src={product.image} alt={product.title} />
              </Grid>
              <Grid item xs={3}>
                <Typography fontWeight={600}>{product.title}</Typography>
              </Grid>
              <Grid
                item
                xs={3}
                display={"flex"}
                flexDirection="row"
                alignItems="center"
                gap={1}
              >
                <IconButton
                  color="primary"
                  onClick={() => {
                    if (product.quantity > 1) {
                      onChangeProductQuantity(index, product.quantity - 1);
                    } else {
                      onRemoveProduct(index);
                    }
                  }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ textAlign: "center", minWidth: "20px" }}>
                  {product.quantity}
                </Typography>
                <IconButton
                  color="primary"
                  onClick={() =>
                    onChangeProductQuantity(index, product.quantity + 1)
                  }
                >
                  <AddIcon />
                </IconButton>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <Typography>
                  {formatCurrency(product.price * product.quantity)}
                </Typography>
              </Grid>
              <Grid item xs={1} sx={{ textAlign: "center" }}>
                <IconButton onClick={() => onRemoveProduct(index)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
      {subTotal !== 0 ? (
        <>
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
                {formatCurrency(Total_Bill)}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => navigate("/checkout")}
              >
                Procced to Checkout
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <Box textAlign="center">
          <img src={empty} alt="empty cart" />
          <Typography
            sx={{
              position: "absolute",
              top: 200,
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            Add your favourite plants and join the ecosystem!
          </Typography>
        </Box>
      )}
    </Drawer>
  );
};

export default Cart;
