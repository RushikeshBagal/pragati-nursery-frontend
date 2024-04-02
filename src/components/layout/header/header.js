import {
  AppBar,
  Badge,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { supabase } from "../../../utils/supabase";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useNavigate } from "react-router-dom";

const Header = ({ showIcons }) => {
  const [token, setToken] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // navigate("/profile");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogout() {
    handleClose();
    sessionStorage.removeItem("token");
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
  }
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography mr={25} variant="h6" component="div">
            Pragati Nursery
          </Typography>
          {showIcons && (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton size="large" aria-label="Search" color="inherit">
                  <SearchIcon />
                  <Typography pl={1}>Search</Typography>
                </IconButton>
                {!token ? (
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    // onClick={()=> <RightSideDrawer/>}
                  >
                    <PersonIcon />
                    <Typography pl={1}>Login/Signup</Typography>
                  </IconButton>
                ) : (
                  <>
                    <IconButton
                      onClick={handleClick}
                      size="large"
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      color="inherit"
                    >
                      <AccountCircle />
                      <Typography pl={1}>Profile</Typography>
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
                          <AccountBoxIcon fontSize="small" />
                        </ListItemIcon>
                        Account
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <LocalMallIcon fontSize="small" />
                        </ListItemIcon>
                        My Orders
                      </MenuItem>
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
                  </>
                )}

                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Badge badgeContent={2} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                  <Typography pl={1}>Cart</Typography>
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
