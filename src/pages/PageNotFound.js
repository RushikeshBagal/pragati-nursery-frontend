import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

 const PageNotFound = () => {
  return (
    <Box sx={{ minHeight: "70vh", maxHeight: "100vh", textAlign: "center" }}>
      <Typography variant="bigHeading" >404</Typography>
      <Typography variant="bigSubHeading" >OOPS! PAGE NOT FOUND</Typography>
      <Box sx={{ marginTop: "30px" }}>
        <Link to="/home">
          <Button variant="outlined" size="large">
            HOME PAGE
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default PageNotFound;
