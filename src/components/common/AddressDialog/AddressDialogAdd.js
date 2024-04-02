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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const AddressDialogAdd = ({ userId, fetchAddress }) => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState({
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

  async function AddAddress() {
    const { error } = await supabase.from("user_address").insert({
      user_id: userId,
      address_line_1: address.address_line_1,
      address_line_2: address.address_line_2,
      landmark: address.landmark,
      city: address.city,
      district: address.district,
      state: address.state,
      pincode: address.pincode,
      mobile_no: address.mobile_no,
      address_type: address.address_type,
    });

    if (error) {
      console.log(error);
    }
    fetchAddress();
  }

  const handleSubmit = () => {
    AddAddress();
    handleClose();
  };

  const handleChange = (event) => {
    setAddress((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleClickChip = (e) => {
    setAddress((prevFormData) => {
      return {
        ...prevFormData,
        address_type: e.target.innerText,
      };
    });
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
        startIcon={<AddCircleOutlineIcon sx={{ width: "16px" }} />}
      >
        Add Address
      </Button>
      <Dialog
        fullWidth
        scroll="body"
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
            <Typography>Add Address</Typography>
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
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="Address Line 2"
              variant="standard"
              name="address_line_2"
              onChange={handleChange}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="Landmark"
              variant="standard"
              name="landmark"
              onChange={handleChange}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="City"
              variant="standard"
              name="city"
              onChange={handleChange}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="District"
              variant="standard"
              name="district"
              onChange={handleChange}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="State"
              variant="standard"
              name="state"
              onChange={handleChange}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="Pincode"
              variant="standard"
              name="pincode"
              onChange={handleChange}
            />
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              id="standard-basic"
              label="Mobile Number"
              variant="standard"
              name="mobile_no"
              onChange={handleChange}
            />
            <Box sx={{ marginTop: 2 }}>
              <Chip
                sx={{ height: "max-content" }}
                color="primary"
                label="Home"
                icon={<HomeIcon sx={{ width: "16px" }} />}
                variant={
                  address.address_type === "Home" ? "filled" : "outlined"
                }
                onClick={(e) => handleClickChip(e)}
              />
              <Chip
                sx={{ height: "max-content", ml: 1 }}
                color="primary"
                label="Work"
                icon={<WorkIcon sx={{ width: "16px" }} />}
                variant={
                  address.address_type === "Work" ? "filled" : "outlined"
                }
                onClick={(e) => handleClickChip(e)}
              />
              <Chip
                sx={{ height: "max-content", ml: 1 }}
                color="primary"
                label="Other"
                icon={<ApartmentIcon sx={{ width: "16px" }} />}
                variant={
                  address.address_type === "Other" ? "filled" : "outlined"
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
