import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const ConfirmationPopUp = (props) => {
  const { openprops, title, message, setClose, buttonOne, buttonTwo } = props;

  const [open, setOpen] = useState(openprops);

  const handleClose = () => {
    setClose();
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      maxWidth="sm"
      fullWidth
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          {buttonOne}
        </Button>
        <Button variant="contained">{buttonTwo}</Button>
      </DialogActions>
    </Dialog>
  );
};
