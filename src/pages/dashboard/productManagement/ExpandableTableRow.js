import React, { useEffect, useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Switch,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { supabase } from "../../../utils/supabase";

export const ExpandableTableRow = (props) => {
  const { list, fetchProductList, setEditProduct, setDisplayProduct } = props;
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  async function deleteProduct(productId) {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("product_id", productId);

    fetchProductList();

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
    }
  }

  useEffect(() => {
    setChecked(list.in_stock);
  }, []);

  function displayProductFun(productId) {
    if (list.product_id === productId) {
      setDisplayProduct({
        product_id: list.product_id,
        product_name: list.product_name,
        description: list.description,
        category_name: list.category_name,
        price: list.price,
        image: list.image,
      });
    }
  }

  const onClickEdit = (editProductId) => {
    displayProductFun(editProductId);
    setEditProduct(true);
  };

  return (
    <>
      <TableRow
        sx={
          open
            ? {
                border: "1px solid #1353A1",
                borderBottom: 0,
                marginBottom: 1,
                "& > *": { borderBottom: "unset" },
                "th, td": { borderTop: "2px solid #1353A1" },
              }
            : { "th, td": { border: 0 } }
        }
      >
        <TableCell>
          <Typography>{list?.product_name}</Typography>
        </TableCell>
        <TableCell>
          <Switch checked={checked} />
        </TableCell>
        <TableCell>
          <TextField
            id="standard-number"
            type="number"
            defaultValue={list.price}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            sx={{ width: "50px" }}
          />
        </TableCell>
        <TableCell>
          <IconButton
            onClick={() => {
              onClickEdit(list?.product_id);
            }}
          >
            <EditNoteOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              deleteProduct(list?.product_id);
            }}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </TableCell>
        <TableCell onClick={() => setOpen(!open)}>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow
        sx={
          open && {
            border: "1px solid #1353A1",
            borderBottom: "2px solid #1353A1",
            borderTop: 0,
          }
        }
      >
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ display: "flex", flexDirection: "row", columnGap: 2 }}>
              <Box>
                <Typography>Product Description</Typography>
              </Box>
              <Box>
                <Typography>{list.description}</Typography>
                {/* <Typography>Product Image</Typography> */}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", columnGap: 2 }}>
              <Box>
                <Typography>Product Image</Typography>
              </Box>
              <Box></Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};