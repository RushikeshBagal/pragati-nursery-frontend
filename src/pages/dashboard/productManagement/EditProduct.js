import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { CategoryAutocomplete } from "../../../components/common/CustomAutocomplete/CategoryAutocomplete";
import { ImageUpload } from "./ImageUpload";
import { supabase } from "../../../utils/supabase";

export const EditProduct = (props) => {
  const {
    selectedValueEditProduct,
    setSelectedValueEditProduct,
    displayProduct,
    setDisplayProduct,
    fetchProductList,
    setEditProduct,
  } = props;

  async function editProductFun(productId) {
    const { data, error } = await supabase
      .from("products")
      .update({
        // product_id:product.product_id,
        product_name: displayProduct.product_name,
        description: displayProduct.description,
        category_name: displayProduct.category_name,
        price: displayProduct.price,
        image: displayProduct.image,
      })
      .eq("product_id", productId);

    fetchProductList();

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
    }
  }

  const handleChangeEdit = (event) => {
    setDisplayProduct((prevFormData) => {
      // console.log(prevFormData)
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleEditSubmit = () => {
    editProductFun(displayProduct.product_id);
    setEditProduct(false);
  };
  return (
    <>
      <Box>
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          fullWidth
          sx={{ pb: 2 }}
          name="name"
          onChange={handleChangeEdit}
          defaultValue={displayProduct.product_name}
        />
        <TextField
          id="outlined-basic"
          label="Product Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          sx={{ pb: 2 }}
          name="description"
          onChange={handleChangeEdit}
          defaultValue={displayProduct.description}
        />
        <CategoryAutocomplete
          selectedValue={selectedValueEditProduct}
          setSelectedValue={setSelectedValueEditProduct}
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
            onChange={handleChangeEdit}
            defaultValue={displayProduct.price}
          />
        </FormControl>
        <Box
          sx={{
            border: "1px solid #000",
            p: 2,
            textAlign: "center",
            height: "35vh",
          }}
        >
          <ImageUpload />
        </Box>
      </Box>
      <Box
        sx={{
          margin: "16px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button variant="outlined" onClick={() => setEditProduct(false)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => handleEditSubmit()}>
          Submit
        </Button>
      </Box>
    </>
  );
};