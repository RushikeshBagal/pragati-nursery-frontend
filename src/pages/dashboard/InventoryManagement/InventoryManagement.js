import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { SearchBox } from "../../../components/common/SearchBox";
import { CustomTableRow } from "./CustomTableRow";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { InOutInventory } from "../InOutInventory";
import { CustomAutocomplete } from "../../../components/common/CustomAutocomplete";
const List = [
  {
    name: "Mango Tree",
    quantity: "200",
    price: "30",
  },
  {
    name: "Pink guava (Peru) Tree",
    quantity: "500",
    price: "18",
  },
  {
    name: "Custard apple Tree",
    quantity: "50",
    price: "9",
  },
  {
    name: "Coconut Tree",
    quantity: "100",
    price: "10",
  },
  {
    name: "Kuber Tree",
    quantity: "15",
    price: "9",
  },
  {
    name: "Bamboo Tree",
    quantity: "900",
    price: "25",
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
export const InventoryManagement = () => {
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
        <Box>
          <Typography variant="topHeading">Inventory Management</Typography>
        </Box>
        <Box mt={2} mb={4}>
          <Typography variant="topSubHeading">
            Manage all Inventory from here.
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
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categoryList}
            // sx={{ pb: 2 }}
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
                      <Typography>Quantity</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Price (&#8377;)</Typography>
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
                        <Typography>{list.quantity}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography> &#8377; {list.price}</Typography>
                      </TableCell>
                      {/* <TableCell>
                    <Button onClick={()=> {<InOutInventory/>}}>
                      <ModeEditOutlineOutlinedIcon />
                    </Button>
                  </TableCell> */}
                      <CustomTableRow />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Box>
  );
};
