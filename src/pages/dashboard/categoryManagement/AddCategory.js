import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { supabase } from "../../../utils/supabase";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

export const AddCategory = (props) => {
  const { setAddCategory, fetchCategoryList } = props;
  const [category, setCategory] = useState({
    category_name: "",
  });

  async function createCategory() {
    const { error } = await supabase.from("categories").insert({
      category_name: category.category_name,
    });

    fetchCategoryList();

    if (error) {
      console.log(error);
    }
  }

  const handleSubmit = () => {
    createCategory();
    setAddCategory(false);
  };

  const handleChange = (event) => {
    setCategory((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Typography variant="topSubHeading">Add New Category</Typography>
      </Box>
      <TextField
        id="outlined-basic"
        label="Category Name"
        variant="outlined"
        fullWidth
        name="category_name"
        onChange={handleChange}
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
          onClick={() => setAddCategory(false)}
          startIcon={<WestOutlinedIcon />}
        >
          Back
        </Button>
        <Button variant="contained" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Box>
    </>
  );
};
