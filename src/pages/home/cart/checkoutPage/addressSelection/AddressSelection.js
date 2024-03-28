import React from "react";
import { Box } from "@mui/material";
import { SavedAddress } from "../../../../Profile/address/SavedAddress";

export const AddressSelection = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <SavedAddress />
    </Box>
  );
};
