import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import "./style.css"

export const CustomAutocomplete = (props) => {
  const { options, label, selectedValue, setSelectedValue } = props;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
    //   autoHighlight
      options={options || []}
      getOptionLabel={(option) => option.label}
      onChange={(e, value) => setSelectedValue(value)}
      value={selectedValue}
      // sx={{ pb: 2 }}
      fullWidth
    //   renderOption={(props, option) => (
    //     <Box className="custom-dropdown">
    //       <Box component="li">{option.label}</Box>
    //     </Box>
    //   )}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
