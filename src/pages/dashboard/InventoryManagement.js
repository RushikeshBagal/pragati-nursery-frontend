import React from "react";
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
import { SearchBox } from "../../components/common/SearchBox";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { InOutInventory } from "./InOutInventory";
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

export const InventoryManagement = () => {
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
                  <TableCell onClick={() => console.log("clicked")}>
                    <Typography>{list.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{list.quantity}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography> &#8377; {list.price}</Typography>
                  </TableCell>
                  <TableCell>
                    <Button onClick={()=> {<InOutInventory/>}}>
                      <ModeEditOutlineOutlinedIcon />
                    </Button>
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
