import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CategoryAutocomplete } from "../../../components/common/CustomAutocomplete/CategoryAutocomplete";
import { ImageUpload } from "./ImageUpload";
import { supabase } from "../../../utils/supabase";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
const { v4 } = require("uuid");

export const AddProduct = (props) => {
  const [imageData, setImageData] = useState({});
  const {
    selectedValueAddProduct,
    setSelectedValueAddProduct,
    setAddProduct,
    product,
    setProduct,
    fetchProductList,
    setSuccessOpen,
  } = props;

  async function createProduct() {
    try {
      const imageName = v4();
      const { data: imageResponse, error: imageError } = await supabase.storage
        .from("Pragati_Nursery")
        .upload(`product_image/${imageName}`, imageData);

      if (imageError) {
        console.error("Error uploading image:", imageError);
        throw imageError;
      }

      const { data, error } = await supabase.from("products").insert({
        product_name: product.name,
        description: product.description,
        category_name: product.category_name,
        price: product.price,
        image: imageResponse,
      });

      fetchProductList();

      if (error) {
        console.error("Product insert error", error);
        throw error;
      }
      if (data) {
        setSuccessOpen(true);
      }
    } catch (error) {}
  }

  const handleSubmit = () => {
    createProduct();
    setAddProduct(false);
  };

  const handleChange = (event) => {
    setProduct((prevFormData) => {
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
        <Typography variant="topSubHeading">Add New Product</Typography>
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          fullWidth
          sx={{ pb: 2, backgroundColor: "#ffffff" }}
          name="name"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Product Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          sx={{ pb: 2, backgroundColor: "#ffffff" }}
          name="description"
          onChange={handleChange}
        />
        <CategoryAutocomplete
          selectedValue={selectedValueAddProduct}
          setSelectedValue={setSelectedValueAddProduct}
        />
        <FormControl fullWidth sx={{ pb: 2, mt: 2 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">&#8377;</InputAdornment>
            }
            label="price"
            type="number"
            name="price"
            onChange={handleChange}
            sx={{ backgroundColor: "#ffffff" }}
          />
        </FormControl>
        <Box
          sx={{
            border: "1px solid #000",
            p: 2,
            textAlign: "center",
            height: "35vh",
            backgroundColor: "#ffffff",
          }}
        >
          <ImageUpload imageData={imageData} setImageData={setImageData} />
        </Box>
      </Box>
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
          onClick={() => setAddProduct(false)}
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
