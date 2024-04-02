import React from "react";
import { Box, Typography } from "@mui/material";

export const SalesChart = () => {
  return (
    <>
      <Box sx={{ minHeight: "100vh", pt: 10, mb: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Typography>Total Users:</Typography>
            <Typography>2658</Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Typography>Total Earning:</Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Typography>Total Orders:</Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Typography>Total Products:</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
