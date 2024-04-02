import {
  Box,
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

export const InOutInventory = ({ product, setShowInOut }) => {
  const [selectedIn, setSelectedIn] = useState(false);
  const [selectedOut, setSelectedOut] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ width: "644px" }}>
        <Typography>{product}</Typography>
        {!selectedIn && !selectedOut && (
          <Box>
            <Button
              variant="contained"
              sx={{ marginTop: "16px", marginRight: "16px" }}
              onClick={() => {
                setSelectedIn(true);
                setSelectedOut(false);
              }}
            >
              In
            </Button>
            <Button
              variant="contained"
              sx={{ marginTop: "16px" }}
              onClick={() => {
                setSelectedIn(false);
                setSelectedOut(true);
              }}
            >
              Out
            </Button>
          </Box>
        )}
        {selectedIn && (
          <>
            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Quantity
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                label="Quantity"
                type="number"
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">&#8377;</InputAdornment>
                }
                label="Amount"
                type="number"
              />
            </FormControl>
          </>
        )}
        {selectedOut && (
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Quantity
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Quantity"
              type="number"
            />
          </FormControl>
        )}
        <Divider sx={{ marginTop: "40px", marginBottom: "24px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{ color: "#000" }}
            onClick={() => {
              setShowInOut({ product: "", show: false });
            }}
          >
            <WestOutlinedIcon /> &nbsp; Back
          </Button>
          {!selectedIn ||
            (!selectedOut && <Button variant="contained">Submit</Button>)}
        </Box>
      </Box>
    </Box>
  );
};
