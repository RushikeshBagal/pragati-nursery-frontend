import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { supabase } from "../../../utils/supabase";
import { Loader } from "../../../components/layout/Loader";
import { AddressDetails } from "../../../components/common/AddressDetails";

const userId = 1;

export const SavedAddress = () => {
  const [savedAddressData, setSavedAddressData] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchAddress() {
    setLoading(true);
    const { data, error } = await supabase.from("user_address").select("*");

    if (error) {
      console.log(error);
      setLoading(false);
    }
    if (data) {
      setSavedAddressData(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <Box>
      {loading && <Loader />}
      <AddressDetails
        fetchAddress={fetchAddress}
        addressData={savedAddressData}
        userId={userId}
        showRadio={false}
        showEdit={true}
        showDelete={true}
      />
    </Box>
  );
};
