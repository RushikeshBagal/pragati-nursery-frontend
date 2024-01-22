import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { SearchBox } from "../../components/common/SearchBox";

const List = [
  {
    name: "Mango Tree",
    quantity: "200",
  },
  {
    name: "Pink guava (Peru) Tree",
    quantity: "500",
  },
  {
    name: "Custard apple Tree",
    quantity: "50",
  },
  {
    name: "Coconut Tree",
    quantity: "100",
  },
  {
    name: "Kuber Tree",
    quantity: "25",
  },
  {
    name: "Bamboo Tree",
    quantity: "900",
  },
];

export const InventryManagement = () => {
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
