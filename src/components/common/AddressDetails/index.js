import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { AddressDialogEdit } from "../AddressDialog/AddressDialogEdit";
import { AddressChip } from "..//AddressChip/AddressChip";
import { supabase } from "../../../utils/supabase";
import DeleteIcon from "@mui/icons-material/Delete";

export const AddressDetails = (props) => {
  const { fetchAddress, addressData, userId, showRadio, showEdit, showDelete } =
    props;

  async function deleteAddress(id) {
    const { data, error } = await supabase
      .from("user_address")
      .delete()
      .eq("address_id", id);

    if (error) {
      console.log(error);
    }
    if (data) {
      fetchAddress();
    }
  }

  return (
    <Box>
      <Box display="flex" flexDirection="row">
        <FormControl>
          <RadioGroup row>
            {addressData?.map((address, idx) => (
              <Box sx={{ marginX: 5, marginTop: 2 }} key={address?.address_id}>
                {showRadio && (
                  <FormControlLabel
                    value={JSON.stringify(address)}
                    control={<Radio size="small" disableRipple />}
                  />
                )}
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
                    {showEdit && (
                      <Box>
                        <AddressDialogEdit
                          savedAddressData={addressData[idx]}
                          userId={userId}
                          fetchAddress={fetchAddress}
                        />
                      </Box>
                    )}
                    {showDelete && (
                      <Box>
                        <Button
                          sx={{ marginLeft: "8px" }}
                          variant="outlined"
                          onClick={() => {
                            deleteAddress(address?.address_id);
                          }}
                          startIcon={<DeleteIcon sx={{ width: "16px" }} />}
                        >
                          Delete
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
                {/* {idx !== addressData.length - 1 && <Divider sx={{ paddingTop: 2 }} />} */}
              </Box>
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
