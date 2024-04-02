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
import ApartmentIcon from "@mui/icons-material/Apartment";
import EditIcon from "@mui/icons-material/Edit";

export const AddressDialogEdit = ({
  savedAddressData,
  userId,
  fetchAddress,
}) => {
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
        address_type: savedAddressData.address_type,
      });
    }
  }
  async function editAddress(userId) {
    const { error } = await supabase
      .from("user_address")
      .update({
        user_id: userId,
        address_line_1: displayAddress.address_line_1,
        address_line_2: displayAddress.address_line_2,
        landmark: displayAddress.landmark,
        city: displayAddress.city,
        district: displayAddress.district,
        state: displayAddress.state,
        pincode: displayAddress.pincode,
        mobile_no: displayAddress.mobile_no,
        address_type: displayAddress.address_type,
      })
      .eq("address_id", savedAddressData.address_id);

    if (error) {
      console.log(error);
    }
    fetchAddress();
  }

  const handleChange = (event) => {
    setDisplayAddress((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = () => {
    editAddress(userId);
    handleClose();
  };

  const handleEditClick = () => {
    setOpen(true);
    displayAddressFun(userId);
  };

  const handleClickChip = (e) => {
    setDisplayAddress((prevFormData) => {
      return {
        ...prevFormData,
        address_type: e.target.innerText,
      };
    });
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          handleEditClick();
        }}
        startIcon={<EditIcon sx={{ width: "16px" }} />}
      >
        Edit
      </Button>
      <Dialog
        fullWidth
        open={open}
        scroll="body"
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
                sx={{ height: "max-content" }}
                color="primary"
                label="Home"
                icon={<HomeIcon sx={{ width: "16px" }} />}
                variant={
                  displayAddress.address_type === "Home" ? "filled" : "outlined"
                }
                onClick={(e) => handleClickChip(e)}
              />
              <Chip
                sx={{ height: "max-content", ml: 1 }}
                color="primary"
                label="Work"
                icon={<WorkIcon sx={{ width: "16px" }} />}
                variant={
                  displayAddress.address_type === "Work" ? "filled" : "outlined"
                }
                onClick={(e) => handleClickChip(e)}
              />
              <Chip
                sx={{ height: "max-content", ml: 1 }}
                color="primary"
                label="Other"
                icon={<ApartmentIcon sx={{ width: "16px" }} />}
                variant={
                  displayAddress.address_type === "Other"
                    ? "filled"
                    : "outlined"
                }
                onClick={(e) => handleClickChip(e)}
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
