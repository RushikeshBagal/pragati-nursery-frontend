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
  const [OTPScreen, setOTPScreen] = useState(false);
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
      {!OTPScreen ? (
        <Box p={2}>
          <TextField
            fullWidth
            id="input-with-sx"
            label="Mobile Number"
            variant="standard"
          />
          <Button fullWidth variant="contained" sx={{ marginTop: "32px" }} onClick={()=> setOTPScreen(true)}>
            Send OTP
          </Button>
        </Box>
      ) : (
        <Box p={2}>
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter OTP"
          variant="standard"
        />
        <Button fullWidth variant="contained" sx={{marginTop:"32px"}}>
          Confirm OTP
        </Button>
      </Box>
      )}
    </Drawer>
  );
};

export default LoginDrawer;
