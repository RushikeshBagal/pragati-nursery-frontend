import React, { useEffect, useState } from "react";
import { SearchBox } from "../../../components/common/SearchBox";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ExpandableTableRow } from "./ExpandableTableRow";
import { CategoryAutocomplete } from "../../../components/common/CustomAutocomplete/CategoryAutocomplete";
import { supabase } from "../../../utils/supabase";
import { AddProduct } from "./AddProduct";
import { EditProduct } from "./EditProduct";
import { CustomSuccessSnackBar } from "../../../components/common/SnackBar/success";

export const ManageProduct = () => {
  const [addProduct, setAddProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [selectedValueAddProduct, setSelectedValueAddProduct] = useState();
  const [selectedValueEditProduct, setSelectedValueEditProduct] =
    useState(selectedValue);
  const [productList, setProductList] = useState();
  const [successOpen, setSuccessOpen] = useState(true);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category_name: "",
    price: "",
    image: "",
  });
  const [displayProduct, setDisplayProduct] = useState({
    product_id: "",
    product_name: "",
    description: "",
    category_name: "",
    price: "",
    image: "",
  });

  async function fetchProductList() {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
     const imageResponseData = data["image"]
      // console.log({imageResponseData})
      setProductList(data);
    }
  }

  useEffect(() => {
    fetchProductList();
  }, [selectedValue]);

  const filteredProduct = productList?.filter(
    (item) => item?.category_name === selectedValue?.category_name
  );

  useEffect(() => {
    product.category_name = selectedValueAddProduct?.category_name;
  }, [selectedValueAddProduct]);

  useEffect(() => {
    displayProduct.category_name = selectedValueEditProduct?.category_name;
  }, [selectedValueEditProduct]);

  // console.log("Product object", product)
  // console.table(productList);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        pt: 19,
        mb: 10,
      }}
    >
      <Box sx={{ width: "644px" }}>
        {!addProduct && !editProduct && (
          <>
            <Box>
              <Typography variant="topHeading">Product Management</Typography>
            </Box>
            <Box mt={2} mb={4}>
              <Typography variant="topSubHeading">
                Add new products from here.
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #DDE1E6",
                borderRadius: 2,
                p: 3,
                backgroundColor: "ffffff",
                mb: 5,
              }}
            >
              <CategoryAutocomplete
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
            </Box>
            {selectedValue && (
              <Box
                sx={{
                  border: "1px solid #DDE1E6",
                  borderRadius: 2,
                  // pt: 3,
                  backgroundColor: "ffffff",
                }}
              >
                <Box
                  sx={{
                    margin: "16px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => setAddProduct(true)}
                  >
                    Add Product
                  </Button>
                </Box>
                <Box sx={{ paddingX: "20px", mt: 4, mb: 4 }}>
                  <SearchBox />
                </Box>
                <TableContainer sx={{ mt: 3, overflowX: "hidden" }}>
                  <Table>
                    <TableHead sx={{ backgroundColor: "#EBF0F4", height: 8 }}>
                      <TableRow>
                        <TableCell>
                          <Typography>Product</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>In Stock</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>Price (&#8377;)</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>Action</Typography>
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredProduct?.map((list, key) => (
                        <ExpandableTableRow
                          key={list.product_id}
                          list={list}
                          fetchProductList={fetchProductList}
                          setEditProduct={setEditProduct}
                          setDisplayProduct={setDisplayProduct}
                        />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </>
        )}
        {/* Add product section */}
        {addProduct && !editProduct && (
          <AddProduct
            selectedValueAddProduct={selectedValueAddProduct}
            setSelectedValueAddProduct={setSelectedValueAddProduct}
            setAddProduct={setAddProduct}
            product={product}
            setProduct={setProduct}
            fetchProductList={fetchProductList}
            setSuccessOpen={setSuccessOpen}
          />
        )}
        {/* Edit Product Section */}
        {!addProduct && editProduct && (
          <EditProduct
            selectedValueEditProduct={selectedValueEditProduct}
            setSelectedValueEditProduct={setSelectedValueEditProduct}
            displayProduct={displayProduct}
            setDisplayProduct={setDisplayProduct}
            fetchProductList={fetchProductList}
            setEditProduct={setEditProduct}
          />
        )}
      </Box>
      {/* <CustomSuccessSnackBar open={successOpen} setOpen={setSuccessOpen} message="Product added Successfully!" /> */}
    </Box>
  );
};
