import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { supabase } from "../../../utils/supabase";

export const AddCategory = (props) => {
  const { setAddCategory, fetchCategoryList, category, setCategory } = props;

  async function createCategory() {
    const { data, error } = await supabase.from("categories").insert({
      category_name: category.category_name,
    });

    fetchCategoryList();

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
    }
  }

  const handleSubmit = () => {
    createCategory();
    setAddCategory(false);
  };

  const handleChange = (event) => {
    setCategory((prevFormData) => {
      // console.log(prevFormData)
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <>
      <Box>
        <TextField
          id="outlined-basic"
          label="Category Name"
          variant="outlined"
          fullWidth
          name="category_name"
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          margin: "16px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button variant="outlined" onClick={() => setAddCategory(false)}>
          Back
        </button>
        <Button variant="contained" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Box>
    </>
  );
};
