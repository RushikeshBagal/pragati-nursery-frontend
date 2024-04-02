import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { supabase } from "../../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authentication } from "../../../reducers/loginSlice";

const DashboardLogin = ({ setToken }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      dispatch(authentication(data.user));
      setToken(data?.session?.access_token);
      navigate("/dashboard-home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      sx={{
        mt: 15,
        mb: 5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "75vw",
          minHeight: "60vh",
          boxShadow: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            logo
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ paddingX: "30px", paddingY: "10px" }}
          >
            <Typography mb={1} sx={{ textAlign: "center", fontSize: "24px" }}>
              Sign In
            </Typography>
            <FormControl variant="standard" fullWidth>
              <InputLabel>
                <Typography>Username</Typography>
              </InputLabel>
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                sx={{ marginBottom: "8px" }}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard" fullWidth>
              <InputLabel>
                <Typography>Password</Typography>
              </InputLabel>
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                sx={{ marginBottom: "8px" }}
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
            <Box mb={2}>
              <Link href="/dashboard-forgotpassword" underline="hover">
                <Typography sx={{ fontSize: "12px" }}>
                  Forgot Password ?
                </Typography>
              </Link>
            </Box>
            <Button
              onClick={handleSubmit}
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
