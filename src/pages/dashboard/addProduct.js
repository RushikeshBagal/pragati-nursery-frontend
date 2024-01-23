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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        pt: 19,
      }}
    >
      <Box sx={{ width: "644px" }}>
        {!addProduct ? (
          <>
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
            <SearchBox />
            <TableContainer sx={{ mt: 3 }}>
              <Table>
                <TableHead>
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
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={categoryList}
                sx={{ pb: 2 }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Select Category" />
                )}
              />
              <FormControl fullWidth sx={{ pb: 2 }}>
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
                <ImageUpload/>
              </Box>
            </Box>
            <Box
              sx={{
                margin: "16px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
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
