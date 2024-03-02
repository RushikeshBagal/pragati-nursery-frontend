import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { SearchBox } from "../../../components/common/SearchBox";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { AddCategory } from "./AddCategory";
import { EditCategory } from "./EditCategory";
import { supabase } from "../../../utils/supabase";

const List = [
  {
    name: "Plants",
  },
  {
    name: "Fertilizers",
  },
  {
    name: "Tools",
  },
  {
    name: "Service",
  },
];

export const ManageCategory = () => {
  const [addCategory, setAddCategory] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [categoryList, setCategoryList] = useState();
  const [checked, setChecked] = useState();
  const [category, setCategory] = useState({
    name: "",
  });
  const [displayCategory, setDisplayCategory] = useState({
    id: "",
    category_name: "",
  });

  async function fetchCategoryList() {
    const { data, error } = await supabase.from("categories").select("*");

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
      setCategoryList(data);
    }
  }

  useEffect(() => {
    fetchCategoryList();
  }, []);

  async function deleteCategory(categoryId) {
    const { data, error } = await supabase
      .from("categories")
      .delete()
      .eq("category_id", categoryId);

    fetchCategoryList();

    if (error) {
      console.log(error);
    }
    if (data) {
      // console.log(data);
    }
  }

  function displayCategoryFun(categoryId) {
    if (categoryList.category_id === categoryId) {
      setDisplayCategory({
        category_id: categoryList.category_id,
        category_name: categoryList.category_name,
      });
    }
  }

  const onClickEdit = (editCategoryId) => {
    displayCategoryFun(editCategoryId);
    setEditCategory(true);
  };

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
        {!addCategory && !editCategory && (
          <>
            <Box>
              <Typography variant="topHeading">Category Management</Typography>
            </Box>
            <Box mt={2} mb={4}>
              <Typography variant="topSubHeading">
                Add new Category from here.
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
                <Button
                  variant="contained"
                  onClick={() => setAddCategory(true)}
                >
                  Add Category
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
                        <Typography>Category</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>Status</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>Action</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {categoryList?.map((list) => (
                      <TableRow>
                        <TableCell>
                          <Typography>{list.category_name}</Typography>
                        </TableCell>
                        <TableCell>
                          <Switch checked={list.status} />
                        </TableCell>
                        <TableCell>
                          <IconButton
                            onClick={() => {
                              onClickEdit(list?.category_id);
                            }}
                          >
                            <EditNoteOutlinedIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              deleteCategory(list?.category_id);
                            }}
                          >
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
        )}
        {/* Add product section */}
        {addCategory && !editCategory && (
          <AddCategory
            setAddCategory={setAddCategory}
            fetchCategoryList={fetchCategoryList}
            category={category}
            setCategory={setCategory}
          />
        )}
        {/* Edit Product Section */}
        {!addCategory && editCategory && (
          <EditCategory
            displayCategory={displayCategory}
            setDisplayCategory={setDisplayCategory}
            setAddCategory={setAddCategory}
            fetchCategoryList={fetchCategoryList}
          />
        )}
      </Box>
    </Box>
  );
};
