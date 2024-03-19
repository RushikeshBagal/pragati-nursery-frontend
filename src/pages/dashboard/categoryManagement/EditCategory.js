import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { supabase } from "../../../utils/supabase";

export const EditCategory = (props) => {
  const { displayCategory, setDisplayCategory, setAddCategory, fetchCategoryList } = props;
  // console.log(displayCategory);

  async function editCategoryFun(categoryId) {
    const { data, error } = await supabase
      .from("categories")
      .update({
        // category_id:product.category_id,
        category_name: displayCategory.category_name,
      })
      .eq("category_id", categoryId);

      fetchCategoryList();

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
    }
  }

  const handleChangeEdit = (event) => {
    setDisplayCategory((prevFormData) => {
      // console.log(prevFormData)
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleEditSubmit = () => {
    editCategoryFun(displayCategory.category_id);
    setAddCategory(false);
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
          onChange={handleChangeEdit}
          defaultValue={displayCategory.category_name}
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
        <Button variant="contained" onClick={() => handleEditSubmit()}>
          Submit
        </Button>
      </Box>
    </>
  );
};
