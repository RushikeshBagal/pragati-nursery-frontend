import { Box } from "@mui/material";
import { AddressDetails } from "../../../../../components/common/AddressDetails";
import { useEffect, useState } from "react";
import { supabase } from "../../../../../utils/supabase";
import { Loader } from "../../../../../components/layout/Loader";

export const AddressSelection = () => {
  const [loading, setLoading] = useState(false);
  const [savedAddressData, setSavedAddressData] = useState([]);
  const userId = 1;

  async function fetchAddress() {
    setLoading(true);
    const { data, error } = await supabase
      .from("user_address")
      .select("*")
      .eq("user_id", userId);

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
    <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
      {loading && <Loader />}
      <AddressDetails
        addressData={savedAddressData}
        userId={userId}
        showRadio={true}
        showEdit={false}
        showDelete={false}
      />
    </Box>
  );
};
