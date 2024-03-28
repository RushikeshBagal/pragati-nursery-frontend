import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { AddressDialogEdit } from "../../../components/common/AddressDialog/AddressDialogEdit";
import { AddressChip } from "../../../components/common/AddressChip/AddressChip";
import { supabase } from "../../../utils/supabase";

const userId = 1;

export const SavedAddress = () => {
  const [savedAddressData, setSavedAddressData] = useState();

  async function fetchAddress() {
    const { data, error } = await supabase.from("user_address").select("*");

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
      setSavedAddressData(data);
    }
  }

  useEffect(() => {
    fetchAddress();
  }, []);

  async function deleteAddress(userId) {
    const { data, error } = await supabase
      .from("user_address")
      .delete()
      .eq("user_id", userId);

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
      fetchAddress();
    }
  }

  return (
    // <Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       columnGap: 2,
    //       marginBottom: 1,
    //     }}
    //   >
    //     <Box sx={{ minWidth: "100px" }}>
    //       <Typography sx={{ fontWeight: 700 }}>Address line 1:</Typography>
    //     </Box>
    //     <Box>
    //       <Typography>{savedAddressData?.address_line_1}</Typography>
    //     </Box>
    //   </Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       columnGap: 2,
    //       marginBottom: 1,
    //     }}
    //   >
    //     <Box sx={{ minWidth: "100px" }}>
    //       <Typography sx={{ fontWeight: 700 }}>Address line 2:</Typography>
    //     </Box>
    //     <Box>
    //       <Typography>{savedAddressData?.address_line_2}</Typography>
    //     </Box>
    //   </Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       columnGap: 2,
    //       marginBottom: 1,
    //     }}
    //   >
    //     <Box sx={{ minWidth: "100px" }}>
    //       <Typography sx={{ fontWeight: 700 }}>Landmark:</Typography>
    //     </Box>
    //     <Box>
    //       <Typography>{savedAddressData?.landmark}</Typography>
    //     </Box>
    //   </Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       columnGap: 2,
    //       marginBottom: 1,
    //     }}
    //   >
    //     <Box sx={{ minWidth: "100px" }}>
    //       <Typography sx={{ fontWeight: 700 }}>City:</Typography>
    //     </Box>
    //     <Box>
    //       <Typography>{savedAddressData?.city}</Typography>
    //     </Box>
    //   </Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       columnGap: 2,
    //       marginBottom: 1,
    //     }}
    //   >
    //     <Box sx={{ minWidth: "100px" }}>
    //       <Typography sx={{ fontWeight: 700 }}>District:</Typography>
    //     </Box>
    //     <Box>
    //       <Typography>{savedAddressData?.district}</Typography>
    //     </Box>
    //   </Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       columnGap: 2,
    //       marginBottom: 1,
    //     }}
    //   >
    //     <Box sx={{ minWidth: "100px" }}>
    //       <Typography sx={{ fontWeight: 700 }}>State:</Typography>
    //     </Box>
    //     <Box>
    //       <Typography>{savedAddressData?.state}</Typography>
    //     </Box>
    //   </Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       columnGap: 2,
    //       marginBottom: 1,
    //     }}
    //   >
    //     <Box sx={{ minWidth: "100px" }}>
    //       <Typography sx={{ fontWeight: 700 }}>Pincode:</Typography>
    //     </Box>
    //     <Box>
    //       <Typography>{savedAddressData?.pincode}</Typography>
    //     </Box>
    //   </Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       columnGap: 2,
    //       marginBottom: 1,
    //     }}
    //   >
    //     <Box sx={{ minWidth: "100px" }}>
    //       <Typography sx={{ fontWeight: 700 }}>Mobile Number:</Typography>
    //     </Box>
    //     <Box>
    //       <Typography>{savedAddressData?.mobile_no}</Typography>
    //     </Box>
    //   </Box>
    //   <Box
    //     sx={{ flexDirection: "row", display: "flex", justifyContent: "start" }}
    //   >
    //     <Box>
    //       <AddressDialogEdit savedAddressData={savedAddressData} />
    //     </Box>
    //     <Box>
    //       <Button
    //         sx={{ marginLeft: "8px" }}
    //         variant="outlined"
    //         onClick={() => {
    //           deleteAddress(userId);
    //         }}
    //       >
    //         Delete Address
    //       </Button>
    //     </Box>
    //   </Box>
    // </Box>
    <Box>
      <Box>
        {savedAddressData?.map((address) => (
          <Box sx={{ marginX: 5, marginTop: 2 }}>
            <Radio />
            <AddressChip label={address?.tag} />
            <Box>
              {/* <Typography>{address?.tag}</Typography> */}
              <Typography>
                {address?.address_line_1},{address?.address_line_2}
              </Typography>
              <Typography>{address?.landmark}</Typography>
              <Typography>{address?.city}</Typography>
              <Typography>
                {address?.district},{address?.state}
              </Typography>
              <Typography>{address?.pincode}</Typography>
              <Typography>Mobile Number: {address?.mobile_no}</Typography>
            </Box>
            <Box sx={{ paddingTop: 1 }}>
              <Box
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Box>
                  <AddressDialogEdit savedAddressData={savedAddressData} />
                </Box>
                <Box>
                  <Button
                    sx={{ marginLeft: "8px" }}
                    variant="text"
                    onClick={() => {
                      deleteAddress(userId);
                    }}
                  >
                    Delete Address
                  </Button>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ paddingTop: 1 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
