import React, { useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { supabase } from "../../../utils/supabase";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

export const EditCategory = (props) => {
  const {
    displayCategory,
    setDisplayCategory,
    setEditCategory,
    fetchCategoryList,
  } = props;

  async function editCategoryFun(categoryId) {
    const { error } = await supabase
      .from("categories")
      .update({
        category_name: displayCategory.category_name,
      })
      .eq("category_id", categoryId);

    fetchCategoryList();

    if (error) {
      console.log(error);
    }
  }

  const handleChangeEdit = (event) => {
    setDisplayCategory((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleEditSubmit = () => {
    editCategoryFun(displayCategory.category_id);
    setEditCategory(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Typography variant="topSubHeading">Edit Category Name</Typography>
      </Box>
      <TextField
        id="outlined-basic"
        label="Category Name"
        variant="outlined"
        fullWidth
        name="category_name"
        onChange={handleChangeEdit}
        defaultValue={displayCategory.category_name}
        sx={{ backgroundColor: "#ffffff" }}
      />
      <Box
        sx={{
          marginY: "16px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => setEditCategory(false)}
          startIcon={<WestOutlinedIcon />}
        >
          Back
        </Button>
        <Button variant="contained" onClick={() => handleEditSubmit()}>
          Submit
        </Button>
      </Box>
    </>
  );
};
