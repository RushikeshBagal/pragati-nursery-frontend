import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const DashboardForgotPassword = () => {
  const [disabled, setDisabled] = React.useState(true);

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
            <Typography mb={6}>Forgot Password</Typography>
            {/* <Typography mb={6}>See your website features!</Typography> */}
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography>Email</Typography>
              </InputLabel>
              <Input
                sx={{ marginBottom: "8px" }}
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
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
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link
                href="#"
                underline="hover"
                //   sx={{ color: "#4169E1", display: "block" }}
              >
                Login
              </Link>
            </Box>
            <Button
              disabled={disabled}
              variant="contained"
              fullWidth
              sx={{ borderRadius: "20px" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardForgotPassword;
