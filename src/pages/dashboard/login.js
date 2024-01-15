import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const DashboardLogin = () => {
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
            <Typography mb={1}>Sign In</Typography>
            <Typography mb={3}>See your website features!</Typography>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography>Username</Typography>
              </InputLabel>
              <Input
                sx={{ marginBottom: "8px" }}
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography>Password</Typography>
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
            <Box
              mt={2}
              mb={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                />
              </FormGroup>
              <Link
                href="#"
                underline="hover"
                //   sx={{ color: "#4169E1", display: "block" }}
              >
                Forgot Password ?
              </Link>
            </Box>
            <Button
              disabled={disabled}
              variant="contained"
              fullWidth
              sx={{ borderRadius: "20px" }}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default DashboardLogin;
