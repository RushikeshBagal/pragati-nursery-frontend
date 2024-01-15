import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDrawer from "../../../pages/home/loginDrawer";

const Header = () => {
  // const [isDraweOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography mr={25} variant="h6" component="div">
            Pragati Nursery
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" aria-label="Search" color="inherit">
              <SearchIcon />
              <Typography pl={1}>Search</Typography>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              // onClick={()=> <RightSideDrawer/>}
            >
              <PersonIcon />
              <Typography pl={1}>Login/Signup</Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <ShoppingCartIcon />
              </Badge>
              <Typography pl={1}>Cart</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
