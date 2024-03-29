import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabase";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  async function handleLogout() {
    handleClose();
    // sessionStorage.removeItem("token")
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
    navigate("/dashboard");
  }

  return (
    <Toolbar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" noWrap component="div">
        Dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={handleClick}
          size="large"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          color="inherit"
        >
          <AccountCircle />
          <Typography pl={1}>Admin</Typography>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Toolbar>
  );
};

export default Header;
