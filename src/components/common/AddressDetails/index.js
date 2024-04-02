import { Box, Button, Divider, Radio, Typography } from "@mui/material";
import { AddressDialogEdit } from "../AddressDialog/AddressDialogEdit";
import { AddressChip } from "..//AddressChip/AddressChip";
import { supabase } from "../../../utils/supabase";
import { AddressDialogAdd } from "../AddressDialog/AddressDialogAdd";

export const AddressDetails = (props) => {
  const { fetchAddress, addressData, userId, showRadio, showEdit, showDelete } =
    props;

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
    <Box>
      {addressData?.map((address, idx) => (
        <Box sx={{ marginX: 5, marginTop: 2 }}>
          {showRadio && <Radio />}
          <AddressChip label={address?.address_type} />
          <Box>
            <Typography>
              {address?.address_line_1},&nbsp;{address?.address_line_2}
            </Typography>
            <Typography>
              {address?.landmark},&nbsp;{address?.city}
            </Typography>
            <Typography>
              {address?.district},&nbsp;{address?.state},&nbsp;
              {address?.pincode}
            </Typography>
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
                <AddressDialogAdd />
              </Box>
              {showEdit && (
                <Box>
                  <AddressDialogEdit savedAddressData={addressData[0]} />
                </Box>
              )}
              {showDelete && (
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
              )}
            </Box>
          </Box>
          {idx !== addressData.length - 1 && <Divider sx={{ paddingTop: 1 }} />}
        </Box>
      ))}
    </Box>
  );
};
