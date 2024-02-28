import React, { useState } from "react";
import { SearchBox } from "../../components/common/SearchBox";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { ImageUpload } from "./ImageUpload";
import { CustomAutocomplete } from "../../components/common/CustomAutocomplete";

const List = [
  {
    name: "Mango Tree",
  },
  {
    name: "Pink guava (Peru) Tree",
  },
  {
    name: "Custard apple Tree",
  },
  {
    name: "Coconut Tree",
  },
  {
    name: "Kuber Tree",
  },
  {
    name: "Bamboo Tree",
  },
];

const categoryList = [
  {
    label: "Plants",
  },
  {
    label: "Fertilizers",
  },
  {
    label: "Tools",
  },
  {
    label: "Service",
  },
];

export const AddProduct = () => {
  const [addProduct, setAddProduct] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
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
        {!addProduct ? (
          <>
            <Box>
              <Typography variant="topHeading">Add New Product</Typography>
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
                <Button variant="contained" onClick={() => setAddProduct(true)}>
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
                        <Typography>Action</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {List.map((list) => (
                      <TableRow>
                        <TableCell>
                          <Typography>{list.name}</Typography>
                        </TableCell>
                        <TableCell>
                          <IconButton>
                            <EditNoteOutlinedIcon />
                          </IconButton>
                          <IconButton>
                            <DeleteOutlinedIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </>
        ) : (
          <>
            <Box>
              <TextField
                id="outlined-basic"
                label="Product Name"
                variant="outlined"
                fullWidth
                sx={{ pb: 2 }}
              />
              <TextField
                id="outlined-basic"
                label="Product Discription"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{ pb: 2 }}
              />
              {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={categoryList}
                sx={{ pb: 2 }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Select Category" />
                )}
              /> */}
              <CustomAutocomplete
                label="Select Category"
                options={categoryList}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
              <FormControl fullWidth sx={{ pb: 2, mt: 2 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">&#8377;</InputAdornment>
                  }
                  label="Amount"
                  type="number"
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
              <Button variant="outlined" onClick={() => setAddProduct(false)}>
                Back
              </Button>
              <Button variant="contained" onClick={() => setAddProduct(false)}>
                Submit
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
