import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { CustomPalette } from "./Palette";
import { CustomTypography } from "./Typography";

const theme = createTheme({
  palette: CustomPalette,
  typography: CustomTypography,
});

export const AppThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
