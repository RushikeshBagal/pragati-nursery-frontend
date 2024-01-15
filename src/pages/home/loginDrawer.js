import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Toolbar,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const LoginDrawer = () => {
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
      <Box p={2} mt={5} width="450px" textAlign="center">
        <Typography>Log in / Create account to manage orders</Typography>
      </Box>
      <Box p={2}>
        <TextField
          fullWidth
          id="input-with-sx"
          label="Mobile Number"
          variant="standard"
        />
        <Button fullWidth variant="contained" sx={{marginTop:"32px"}}>
          Send OTP
        </Button>
      </Box>
    </Drawer>
  );
};

export default LoginDrawer;
