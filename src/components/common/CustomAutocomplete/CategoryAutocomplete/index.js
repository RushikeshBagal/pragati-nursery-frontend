import React, { useEffect, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import "./style.css";
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
      setCategoryList(data);
    }
  }

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <Autocomplete
      options={categoryList || []}
      getOptionLabel={(option) => option?.category_name}
      getOptionDisabled={(option) => !option?.status}
      onChange={(e, value) => setSelectedValue(value)}
      value={selectedValue}
      fullWidth
      renderOption={(props, option) => (
        <Box className="custom-dropdown" {...props}>
          <Box component="li">{option.category_name}</Box>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Category"
          sx={{ backgroundColor: "#ffffff" }}
        />
      )}
    />
  );
};
