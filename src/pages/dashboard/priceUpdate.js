import React from "react";
import {
  Box,
  InputAdornment,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { SearchBox } from "../../components/common/SearchBox";

const List = [
  {
    name: "Mango Tree",
    quantity: "200",
    price: "30",
    stock: "false",
  },
  {
    name: "Pink guava (Peru) Tree",
    quantity: "500",
    price: "18",
    stock: "false",
  },
  {
    name: "Custard apple Tree",
    quantity: "50",
    price: "9",
    stock: "true",
  },
  {
    name: "Coconut Tree",
    quantity: "100",
    price: "10",
    stock: "true",
  },
  {
    name: "Kuber Tree",
    quantity: "15",
    price: "9",
    stock: "false",
  },
  {
    name: "Bamboo Tree",
    quantity: "900",
    price: "25",
    stock: "true",
  },
];

export const PriceUpdate = () => {
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
        <SearchBox />
        <TableContainer sx={{ mt: 3 }}>
          <Table>
            <TableHead>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {List.map((list) => (
                <TableRow>
                  <TableCell onClick={() => console.log("clicked")}>
                    <Typography>{list.name}</Typography>
                  </TableCell>
                  <TableCell>
                    {/* <Typography>{list.quantity}</Typography> */}
                    <Switch />
                  </TableCell>
                  <TableCell>
                    {/* <Typography> &#8377; {list.price}</Typography> */}
                    <TextField
                      id="standard-number"
                      //   label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                      sx={{ width: "50px" }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
