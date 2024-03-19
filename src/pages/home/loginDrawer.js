import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Toolbar,
  IconButton,
  TextField,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginDrawer = () => {
  const [isDraweOpen, setIsDrawerOpen] = useState(true);
  const [OTPScreen, setOTPScreen] = useState(false);
  const [signUpScreen, setSignupScreen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formDataSignUp, setFormdataSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    // role:"user",
  });
  const [formDataLogin, setFormdataLogin] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeSignUp = (event) => {
    setFormdataSignUp((prevFormData) => {
      // console.log(prevFormData)
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleChangeLogin = (event) => {
    setFormdataLogin((prevFormData) => {
      // console.log(prevFormData)
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  // console.log(formDataLogin);

  async function createUser() {
    const { data, error } = await supabase.auth.signUp({
      email: formDataSignUp.email,
      password: formDataSignUp.password,
      options: {
        data: {
          firstName: formDataSignUp.firstName,
          lastName: formDataSignUp.lastName,
          contact: formDataSignUp.contact,
          role: "user",
        },
      },
    });

    if (error) {
      console.log(error);
    }
    if (data) {
      setSignupScreen(false);
      console.log(data);
    }
  }

  async function loginUser() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formDataLogin.email,
      password: formDataLogin.password,
    });

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  }

  const handleSignUp = () => {
    createUser();
  };

  const handleLogin = () => {
    loginUser();
    setIsDrawerOpen(false);
  };

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
      {!signUpScreen ? (
        <>
          <Box p={2} mt={5} width="450px" textAlign="center">
            <Typography>Log in</Typography>
          </Box>
          <Box p={2}>
            <Box>
              <TextField
                fullWidth
                id="input-with-sx"
                label="Username/Email"
                variant="standard"
                name="email"
                onChange={handleChangeLogin}
              />
            </Box>
            <Box pt={1}>
              {/* <TextField
                fullWidth
                id="input-with-sx"
                label="Password"
                variant="standard" */}
              <FormControl sx={{ width: "100%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  type={showPassword ? "text" : "password"}
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
                  name="password"
                  onChange={handleChangeLogin}
                />
              </FormControl>
              {/* /> */}
            </Box>
            <Box
              pt={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
              }}
            >
              <Typography>
                Don't have an account{" "}
                <Link
                  onClick={() => {
                    setSignupScreen(true);
                  }}
                >
                  SignUp
                </Link>
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{ marginTop: "32px" }}
              onClick={() => handleLogin()}
            >
              Login
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box p={2} mt={5} width="450px" textAlign="center">
            <Typography>Sign Up</Typography>
          </Box>
          <Box p={2}>
            <Box>
              <TextField
                fullWidth
                id="input-with-sx"
                label="First Name"
                variant="standard"
                name="firstName"
                onChange={handleChangeSignUp}
              />
            </Box>
            <Box pt={1}>
              <TextField
                fullWidth
                id="input-with-sx"
                label="Last Name"
                variant="standard"
                name="lastName"
                onChange={handleChangeSignUp}
              />
            </Box>
            <Box pt={1}>
              <TextField
                fullWidth
                id="input-with-sx"
                label="Email"
                type="email"
                variant="standard"
                name="email"
                onChange={handleChangeSignUp}
              />
            </Box>
            <Box pt={1}>
              <TextField
                fullWidth
                id="input-with-sx"
                label="Contact Number"
                // type="number"
                variant="standard"
                name="contact"
                onChange={handleChangeSignUp}
              />
            </Box>
            <Box pt={1}>
              <FormControl sx={{ width: "100%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  type={showPassword ? "text" : "password"}
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
                  name="password"
                  onChange={handleChangeSignUp}
                />
              </FormControl>
            </Box>
            <Box
              pt={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
              }}
            >
              <Typography>
                Have an account{" "}
                <Link
                  onClick={() => {
                    setSignupScreen(false);
                  }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{ marginTop: "32px" }}
              onClick={() => handleSignUp()}
            >
              SignUp
            </Button>
          </Box>
        </>
      )}
      {/* {!OTPScreen ? (
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
      )} */}
    </Drawer>
  );
};

export default LoginDrawer;
