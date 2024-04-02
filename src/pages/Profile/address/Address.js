import { Box } from "@mui/material";
import { AddressDialogAdd } from "../../../components/common/AddressDialog/AddressDialogAdd";
import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import { Loader } from "../../../components/layout/Loader";
import { AddressDetails } from "../../../components/common/AddressDetails";

export const AddressSection = () => {
  const userId = 1;
  const [loading, setLoading] = useState(false);
  const [savedAddressData, setSavedAddressData] = useState([]);

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
    <>
      {loading && <Loader />}
      {savedAddressData.length > 0 ? (
        <Box sx={{ p: 2, my: 2 }}>
          <Box display="flex" justifyContent="flex-end">
            <AddressDialogAdd userId={userId} fetchAddress={fetchAddress} />
          </Box>
          <AddressDetails
            fetchAddress={fetchAddress}
            addressData={savedAddressData}
            userId={userId}
            showRadio={false}
            showEdit={true}
            showDelete={true}
          />
        </Box>
      ) : (
        <>
          <Box sx={{ border: "1px solid #ddd", p: 2, mt: 2, borderRadius: 2 }}>
            <Box pt={2} sx={{ textAlign: "center" }}>
              No Address Found
            </Box>
            <Box pt={5} sx={{ textAlign: "center" }}>
              <AddressDialogAdd userId={userId} fetchAddress={fetchAddress} />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
