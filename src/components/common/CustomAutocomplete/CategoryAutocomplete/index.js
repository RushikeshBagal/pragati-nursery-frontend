import React, { useEffect, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import "./style.css"
import { supabase } from "../../../../utils/supabase";

export const CategoryAutocomplete = (props) => {
  const { selectedValue, setSelectedValue } = props;
  const [categoryList, setCategoryList] = useState();

  async function fetchCategoryList() {
    const { data, error } = await supabase.from("categories").select("*");
    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
      setCategoryList(data);
    }
  }

  useEffect(() => {
    fetchCategoryList();
  }, []);
  
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
    //   autoHighlight
      options={categoryList || []}
      getOptionLabel={(option) => option?.category_name}
      getOptionDisabled={(option) => !option?.status}
      onChange={(e, value) => setSelectedValue(value)}
      value={selectedValue}
      // sx={{ pb: 2 }}
      fullWidth
    //   renderOption={(props, option) => (
    //     <Box className="custom-dropdown">
    //       <Box component="li">{option.label}</Box>
    //     </Box>
    //   )}
      renderInput={(params) => <TextField {...params} label="Select Category" />}
    />
  );
};
