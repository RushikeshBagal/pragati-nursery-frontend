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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const ManageProduct = (props) => {
  const { addProduct, setAddProduct, editProduct, setEditProduct } = props;
  const [selectedValue, setSelectedValue] = useState();
  const [selectedValueAddProduct, setSelectedValueAddProduct] = useState();
  const [selectedValueEditProduct, setSelectedValueEditProduct] = useState();
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
  const [displayData, setDisplayData] = useState();

  async function fetchProductList() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category_name", selectedValue?.category_name);

    if (error) {
      console.log(error);
    }
    if (data) {
      // const imageResponseData = data["image"];
      setProductList(data);
    }
  }

  useEffect(() => {
    if (selectedValue) {
      fetchProductList();
      setSelectedValueEditProduct(selectedValue);
    }
  }, [selectedValue]);

  useEffect(() => {
    product.category_name = selectedValueAddProduct?.category_name;
  }, [selectedValueAddProduct]);

  useEffect(() => {
    displayProduct.category_name = selectedValueEditProduct?.category_name;
  }, [selectedValueEditProduct]);

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
                Manage existing products or add new products here.
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #DDE1E6",
                borderRadius: 2,
                p: 3,
                backgroundColor: "#ffffff",
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
                  backgroundColor: "#ffffff",
                }}
              >
                <Box
                  sx={{
                    margin: "16px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="topSubHeading" ml={1}>
                      Products
                    </Typography>
                  </Box>
                  <Box sx={{ mr: 1 }}>
                    <Button
                      variant="contained"
                      onClick={() => setAddProduct(true)}
                      startIcon={
                        <AddCircleOutlineIcon sx={{ width: "16px" }} />
                      }
                    >
                      Add Product
                    </Button>
                  </Box>
                </Box>
                {productList && (
                  <Box sx={{ paddingX: "20px", mt: 4, mb: 4 }}>
                    <SearchBox
                      data={productList}
                      handleData={setDisplayData}
                      title="Search Products"
                      property={"product_name"}
                    />
                  </Box>
                )}

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
                          <Typography sx={{ textAlign: "center" }}>
                            Price (&#8377;)
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={{ textAlign: "center" }}>
                            Action
                          </Typography>
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {displayData?.map((list) => (
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
    </Box>
  );
};
