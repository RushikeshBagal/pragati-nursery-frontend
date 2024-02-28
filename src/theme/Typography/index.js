import { createTheme } from "@mui/material";

const theme = createTheme();

// const responsiveTypography = (
//   breakPoint,
//   fontSize,
//   lineHeight = "normal",
//   letterSpacing = "normal",
//   fontWeight
// ) => {
//   return {
//     [theme.breakpoints.down(breakPoint)]: {
//       fontSize: theme.typography.pxToRem(fontSize),
//       lineHeight,
//       letterSpacing,
//       fontWeight,
//     },
//   };
// };
export const CustomTypography = {
  fontFamily: "Trebuchet MS",
  bigHeading: {
    // desktop
    fontSize: theme.typography.pxToRem(200),
    fontWeight: 800,

    // // tablet
    // ...responsiveTypography("lg", 100),
    // // mobile
    // ...responsiveTypography("md", 100),
  },
  bigSubHeading: {
    fontSize: theme.typography.pxToRem(50),
    fontWeight: 400
  },
  footerHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 600
  },
  copyrightText: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 400
  },
  heading: {
    fontSize: theme.typography.pxToRem(50),
    fontWeight: 600
  },
  topHeading: {
    fontSize: theme.typography.pxToRem(40),
    fontWeight: 700,
    lineHeight: "45px",
    letterSpacing: "0.8px"
  },
  topSubHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0.24px"
  }
};
