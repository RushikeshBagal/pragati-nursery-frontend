import { Box, Typography } from "@mui/material";
import React from "react";

export const Profile = () => {
  return (
    <Box mt={15} mx={10}>
      <Box>
        <Typography>Account</Typography>
      </Box>
      <Box mt={2}>
        <Box sx={{display:"flex", flexDirection:"row"}}>
          <Typography>Rushikesh</Typography>
          <Typography>&nbsp;Bagal</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row"}}>
          <Typography>8805660539</Typography>
          <Typography>&nbsp; | &nbsp;</Typography>
          <Typography>rushikeshb@gmail.com</Typography>
        </Box>
      </Box>
      <Box my={3} sx={{border:"1px solid #ddd", height:"50vh"}}></Box>
    </Box>
  );
};
