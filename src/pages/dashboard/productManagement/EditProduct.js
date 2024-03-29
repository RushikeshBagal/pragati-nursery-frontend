import React, { useEffect, useState } from "react";
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
import { CategoryAutocomplete } from "../../../components/common/CustomAutocomplete/CategoryAutocomplete";
import { ImageUpload } from "./ImageUpload";
import { supabase } from "../../../utils/supabase";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

export const EditProduct = (props) => {
  const {
    selectedValueEditProduct,
    setSelectedValueEditProduct,
    displayProduct,
    setDisplayProduct,
    fetchProductList,
    setEditProduct,
  } = props;

  const [imageData, setImageData] = useState({});

  async function editProductFun(productId) {
    const { error } = await supabase
      .from("products")
      .update({
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
  }

  const handleChangeEdit = (event) => {
    setDisplayProduct((prevFormData) => {
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

  const getDownloadURL = () => {
    if (displayProduct.image) {
      const { data } = supabase.storage
        .from("Pragati_Nursery")
        .getPublicUrl(displayProduct.image.path);
      setImageData(data.publicUrl);
    }
  };

  useEffect(() => {
    getDownloadURL();
  }, []);

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Typography variant="topSubHeading">Edit Product</Typography>
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          fullWidth
          sx={{ pb: 2, backgroundColor: "#ffffff" }}
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
          sx={{ pb: 2, backgroundColor: "#ffffff" }}
          name="description"
          onChange={handleChangeEdit}
          defaultValue={displayProduct.description}
        />
        <CategoryAutocomplete
          selectedValue={selectedValueEditProduct}
          setSelectedValue={setSelectedValueEditProduct}
          defaultInput={selectedValueEditProduct}
        />
        <FormControl fullWidth sx={{ pb: 2, mt: 2 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">&#8377;</InputAdornment>
            }
            sx={{ backgroundColor: "#ffffff" }}
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
          onClick={() => setEditProduct(false)}
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
