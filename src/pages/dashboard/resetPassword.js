import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const DashboardResetPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        marginBottom: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "75vw",
          height: "55vh",
          boxShadow: 3,
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} lg={6}></Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ paddingX: "50px", paddingY: "50px" }}
          >
            <Typography mb={6}>Reset Password</Typography>
            {/* <Typography mb={6}>See your website features!</Typography> */}
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography>New Password</Typography>
              </InputLabel>
              <Input
                sx={{ marginBottom: "8px" }}
                id="input-with-icon-adornment"
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography>Confirm new password</Typography>
              </InputLabel>
              <Input
                sx={{ marginBottom: "8px" }}
                id="input-with-icon-adornment"
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              disabled={disabled}
              variant="contained"
              fullWidth
              sx={{ borderRadius: "20px", marginTop: "16px" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardResetPassword;
