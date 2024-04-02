import React, { useEffect, useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Switch,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { supabase } from "../../../utils/supabase";
import { ConfirmationPopUp } from "../../../components/common/ConfirmationPopUp/ConfirmationPopUp";
import { CustomSnackBar } from "../../../components/common/CustomSnackBar/CustomSnackBar";

export const ExpandableTableRow = (props) => {
  const { list, fetchProductList, setEditProduct, setDisplayProduct } = props;
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [imageURL, setImageURL] = useState();
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const [deleteSnackBar, setDeleteSnackBar] = useState(false);

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
      setDeleteSnackBar(true)
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

  const getDownloadURL = () => {
    if (list.image) {
      const { data } = supabase.storage
        .from("Pragati_Nursery")
        .getPublicUrl(list.image.path);
      setImageURL(data.publicUrl);
    }
  };

  useEffect(() => {
    getDownloadURL();
  }, []);

  const handleDelete = () => {};

  return (
    <>
      <TableRow
        sx={
          open
            ? {
                border: "1px solid #294B29",
                borderBottom: 0,
                marginBottom: 1,
                "& > *": { borderBottom: "unset" },
                "th, td": { borderTop: "2px solid #294B29" },
              }
            : { "th, td": { border: 0 } }
        }
      >
        <TableCell>
          <Typography sx={{ fontWeight: 700 }}>{list?.product_name}</Typography>
        </TableCell>
        <TableCell>
          <Switch checked={checked} />
        </TableCell>
        <TableCell>
          <Typography sx={{ textAlign: "center" }}>
            &#8377;&nbsp;{list?.price}
          </Typography>
        </TableCell>
        <TableCell sx={{ textAlign: "center", borderBottom: 0 }}>
          <IconButton
            onClick={() => {
              onClickEdit(list?.product_id);
            }}
          >
            <EditNoteOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setConfirmationPopUp(true);
              // deleteProduct(list?.product_id);
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
            border: "1px solid #294B29",
            borderBottom: "2px solid #294B29",
            borderTop: 0,
          }
        }
      >
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} unmountOnExit>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 2,
                marginBottom: 2,
              }}
            >
              <Box sx={{ minWidth: "100px" }}>
                <Typography sx={{ fontWeight: 700 }}>Description:</Typography>
              </Box>
              <Box>
                <Typography>{list.description}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", columnGap: 2 }}>
              <Box sx={{ minWidth: "100px" }}>
                <Typography sx={{ fontWeight: 700 }}>Image:</Typography>
              </Box>
              <Box>
                <img
                  src={imageURL}
                  alt={list?.product_name}
                  style={{ maxHeight: "200px", maxWidth: "200px" }}
                />
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      {confirmationPopUp && (
        <ConfirmationPopUp
          openprops={confirmationPopUp}
          title="Delete"
          message="You really want to delete this product"
          handleAction={handleDelete}
          setClose={() => setConfirmationPopUp(false)}
          buttonOne="Cancel"
          buttonTwo="Delete"
        />
      )}
      {deleteSnackBar && (
        <CustomSnackBar
          open={deleteSnackBar}
          setOpen={setDeleteSnackBar}
          message="Product Deleted!"
          type="error"
        />
      )}
    </>
  );
};
