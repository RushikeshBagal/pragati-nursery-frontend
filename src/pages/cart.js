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
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {
  const [isDraweOpen, setIsDrawerOpen] = useState(true);
  return (
    <Drawer
      anchor="right"
      open={isDraweOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Toolbar>
        <IconButton onClick={() => setIsDrawerOpen(false)}>
          <ClearIcon />
        </IconButton>
      </Toolbar>
      <Box pl={2} py={2} width="450px">
        <Typography>Order Summary</Typography>
      </Box>
      <Box p={2}>
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
            <Typography> &#8377; 662.8</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Delivery Charge</Typography>
            <Typography> &#8377; 0</Typography>
          </Box>
          <Divider sx={{paddingTop:"8px"}}/>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop:"8px"
            }}
          >
            <Typography>Total</Typography>
            <Typography>&#8377; 662.8</Typography>
          </Box>
        </Box>
        <Button fullWidth variant="contained" sx={{position:"absolute", bottom:"0"}}>Procced to Checkout</Button>
      </Box>
    </Drawer>
  );
};

export default Cart;
