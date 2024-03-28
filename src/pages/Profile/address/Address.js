import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { AddressDialogAdd } from "../../../components/common/AddressDialog/AddressDialogAdd";
import { SavedAddress } from "./SavedAddress";
import { supabase } from "../../../utils/supabase";

export const AddressSection = () => {
  const [isAddress, setIsAddress] = useState(true);
  // const [savedAddressData, setSavedAddressData] = useState();

  // async function fetchAddress() {
  //   const { data, error } = await supabase.from("user_address").select("*");

  //   if (error) {
  //     console.log(error);
  //   }
  //   if (data) {
  //     console.log(data);
  //     setSavedAddressData(data[0]);
  //   }
  // }

  // useEffect(() => {
  //   if (isAddress) fetchAddress();
  // }, []);

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
