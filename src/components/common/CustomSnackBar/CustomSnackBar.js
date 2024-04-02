import React, { useState } from "react";
import { Alert, Button, Slide, Snackbar } from "@mui/material";

export const CustomSnackBar = (props) => {
  const { open, setOpen, message, type } = props;
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={SlideTransition}
        sx={{ marginTop: "50px" }}
      >
        <Alert
          onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
