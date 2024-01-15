import { Box, Grid, IconButton, Typography, Link } from "@mui/material";
import React from "react";
import { AppIcon } from "../../../constants/AppIcon";

const Footer = () => {
  return (
    <Box>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{ color: "primary.white", paddingX: 5, paddingY: 10 }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="footerHeading">Logo</Typography>
            <Typography mb={1} mt={2}>
              Follow Us
            </Typography>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ p: 0, mr: 1 }}
            >
              <AppIcon
                sx={{ color: "primary.white" }}
                name="FacebookOutlined"
              />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ p: 0, mr: 1 }}
            >
              <AppIcon sx={{ color: "primary.white" }} name="Instagram" />
            </IconButton>
            <IconButton
              href="https://youtube.com"
              target="_blank"
              sx={{ p: 0, mr: 1 }}
            >
              <AppIcon sx={{ color: "primary.white" }} name="YouTube" />
            </IconButton>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={2}>
            <Typography mb={2} variant="footerHeading">
              Services
            </Typography>
            <Typography>Hair Care</Typography>
            <Typography>Hair Styling</Typography>
            <Typography>Hair Cut</Typography>
            <Typography>Hair Coloring</Typography>
            <Typography>Straightening</Typography>
          </Grid> */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography mb={2} variant="footerHeading">
              Links
            </Typography>
            <Typography>
              <Link color={"primary.white"} href="" underline="hover">
                Why ChopsCut?
              </Link>
            </Typography>
            <Typography>
              <Link color={"primary.white"} href="" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
            <Typography>
              <Link color={"primary.white"} href="" underline="hover">
                Terms & Condition
              </Link>
            </Typography>
            <Typography>
              <Link color={"primary.white"} href="" underline="hover">
                About
              </Link>
            </Typography>
            <Typography>
              <Link color={"primary.white"} href="" underline="hover">
                Store Locator
              </Link>
            </Typography>
            <Typography>
              <Link color={"primary.white"} href="" underline="hover">
                Franchisee
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Typography mb={2} variant="footerHeading">
              Contact
            </Typography>
            <Typography>
              Kuldharan Road, Karjat, Tal: Karjat, Dist: Ahmednagar, MH, 414402
            </Typography>
            <Typography>
              <Link color={"primary.white"} href="mailto:contact@chopscut.com">
                contact@chopscut.com
              </Link>
            </Typography>
            <Typography>
              call:&nbsp;
              <Link color={"primary.white"} href="tel:+918485841010">
                +91 8485841010
              </Link>
            </Typography>
            {/* <Typography mb={1} mt={2}>
              Follow Us
            </Typography>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ p: 0, mr: 1 }}
            >
              <AppIcon
                sx={{ color: "primary.white" }}
                name="FacebookOutlined"
              />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ p: 0, mr: 1 }}
            >
              <AppIcon sx={{ color: "primary.white" }} name="Instagram" />
            </IconButton>
            <IconButton
              href="https://youtube.com"
              target="_blank"
              sx={{ p: 0, mr: 1 }}
            >
              <AppIcon sx={{ color: "primary.white" }} name="YouTube" />
            </IconButton> */}
          </Grid>
        </Grid>
      </Box>
      <Box
        p={2}
        sx={{
          backgroundColor: "primary.main",
          color: "primary.white",
          textAlign: "center",
        }}
      >
        <Typography variant="copyrightText">
          &copy; 2024 Copyright - ChopsCut - All
          Rights Reserved.&nbsp;
        </Typography>
        <Typography variant="copyrightText">
          Powered by&nbsp;
          <Link color={"primary.white"} href="https://instagram.com">
            our company name
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
