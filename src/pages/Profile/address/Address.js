import React, { useState } from "react";
import { Box } from "@mui/material";
import { AddressDialogAdd } from "../../../components/common/AddressDialog/AddressDialogAdd";
import { SavedAddress } from "./SavedAddress";

export const AddressSection = () => {
  const [isAddress, setIsAddress] = useState(true);

  return (
    <>
      {isAddress ? (
        <SavedAddress />
      ) : (
        <>
          <Box pt={2} sx={{ textAlign: "center" }}>
            No Saved Address
          </Box>
          <Box pt={5} sx={{ textAlign: "center" }}>
            <AddressDialogAdd setIsAddress={setIsAddress} />
          </Box>
        </>
      )}
    </>
  );
};
