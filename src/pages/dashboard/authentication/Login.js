import { useState } from "react";
import {
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
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { supabase } from "../../../utils/supabase";
import { useNavigate } from "react-router-dom";

const DashboardLogin = ({setToken}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });
      if (error) throw error;
      // console.log(data)
      setToken(data)
      navigate("/dashboard-home");
    } catch (error) {
      alert(error);
    }
  }
  // console.log(formData);
  return (
    <Box
      sx={{
        mt: 15,
        mb: 5,
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
            {/* <Typography mb={3}>See your website features!</Typography> */}
            <FormControl variant="standard" fullWidth>
              <InputLabel>
                <Typography>Username</Typography>
              </InputLabel>
              <Input
              onChange={(e) => setFormData({...formData, email: e.target.value })}
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
              onChange={(e) => setFormData({...formData, password: e.target.value })}
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
                href="/dashboard-forgotpassword"
                underline="hover"
              >
                Forgot Password ?
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
