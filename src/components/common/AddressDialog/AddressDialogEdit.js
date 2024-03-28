import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { supabase } from "../../../utils/supabase";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const userId = 1;

export const AddressDialogEdit = ({ savedAddressData }) => {
  const [open, setOpen] = useState(false);
  const [displayAddress, setDisplayAddress] = useState({
    address_line_1: "",
    address_line_2: "",
    landmark: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    mobile_no: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  function displayAddressFun(userId) {
    if (savedAddressData.user_id === userId) {
      setDisplayAddress({
        address_line_1: savedAddressData.address_line_1,
        address_line_2: savedAddressData.address_line_2,
        landmark: savedAddressData.landmark,
        city: savedAddressData.city,
        district: savedAddressData.district,
        state: savedAddressData.state,
        pincode: savedAddressData.pincode,
        mobile_no: savedAddressData.mobile_no,
      });
    }
  }

  async function editAddress(userId) {
    const { data, error } = await supabase
      .from("user_address")
      .update({
        address_line_1: displayAddress.address_line_1,
        address_line_2: displayAddress.address_line_2,
        landmark: displayAddress.landmark,
        city: displayAddress.city,
        district: displayAddress.district,
        state: displayAddress.state,
        pincode: displayAddress.pincode,
        mobile_no: displayAddress.mobile_no,
      })
      .eq("user_id", userId);

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
    }
  }

  const handleChange = (event) => {
    setDisplayAddress((prevFormData) => {
      // console.log(prevFormData)
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = () => {
    editAddress(userId);
    handleClose();
    // setIsAddress(true);
  };

  const handleEditClick = () => {
    setOpen(true);
    displayAddressFun(userId);
    // setIsAddress(true);
  };

  const handleClickChip = () => {};

  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          handleEditClick();
        }}
      >
        Edit Address
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box p={3}>
          <Box>
            <CloseIcon
              sx={{ float: "right", cursor: "pointer" }}
              onClick={handleClose}
            />
          </Box>
          <DialogTitle sx={{ textAlign: "center" }}>
            <Typography>Edit Address</Typography>
          </DialogTitle>
          <Box>
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="Address Line 1"
              variant="standard"
              name="address_line_1"
              onChange={handleChange}
              defaultValue={displayAddress.address_line_1}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="Address Line 2"
              variant="standard"
              name="address_line_2"
              onChange={handleChange}
              defaultValue={displayAddress.address_line_2}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="Landmark"
              variant="standard"
              name="landmark"
              onChange={handleChange}
              defaultValue={displayAddress.landmark}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="City"
              variant="standard"
              name="city"
              onChange={handleChange}
              defaultValue={displayAddress.city}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="District"
              variant="standard"
              name="district"
              onChange={handleChange}
              defaultValue={displayAddress.district}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="State"
              variant="standard"
              name="state"
              onChange={handleChange}
              defaultValue={displayAddress.state}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="Pincode"
              variant="standard"
              name="pincode"
              onChange={handleChange}
              defaultValue={displayAddress.pincode}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="Mobile Number"
              variant="standard"
              name="mobile_no"
              onChange={handleChange}
              defaultValue={displayAddress.mobile_no}
            />
            <Box sx={{ marginTop: 2 }}>
              <Chip
                label="Home"
                icon={<HomeIcon />}
                variant="outlined"
                onClick={handleClickChip}
              />
              <Chip
                sx={{ marginLeft: 2 }}
                label="Work"
                icon={<WorkIcon />}
                variant="outlined"
                onClick={handleClickChip}
              />
              <Chip
                sx={{ marginLeft: 2 }}
                label="Other"
                icon={<LocationOnIcon />}
                variant="outlined"
                onClick={handleClickChip}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
              }}
            >
              <Button
                sx={{ marginRight: 2, marginTop: 2 }}
                variant="outlined"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                sx={{ marginTop: 2 }}
                variant="contained"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};
