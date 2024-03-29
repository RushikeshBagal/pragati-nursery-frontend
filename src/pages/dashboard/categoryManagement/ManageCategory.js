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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const ManageCategory = (props) => {
  const { addCategory, setAddCategory, editCategory, setEditCategory } = props;
  const [categoryList, setCategoryList] = useState();
  // const [checked, setChecked] = useState();
  const [displayData, setDisplayData] = useState();
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
      setCategoryList(data);
    }
  }

  useEffect(() => {
    fetchCategoryList();
  }, []);

  async function deleteCategory(categoryId) {
    const { error } = await supabase
      .from("categories")
      .delete()
      .eq("category_id", categoryId);

    fetchCategoryList();

    if (error) {
      console.log(error);
    }
  }

  const onClickEdit = (data) => {
    setDisplayCategory(data);
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
                Add and manage Category here.
              </Typography>
            </Box>
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
                    Categories
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  onClick={() => setAddCategory(true)}
                  startIcon={<AddCircleOutlineIcon sx={{ width: "16px" }} />}
                  sx={{ mr: 1 }}
                >
                  Add Category
                </Button>
              </Box>
              {categoryList && (
                <Box sx={{ paddingX: "20px", mt: 4, mb: 4 }}>
                  <SearchBox
                    data={categoryList}
                    handleData={setDisplayData}
                    title="Search Products"
                    property={"category_name"}
                  />
                </Box>
              )}
              <TableContainer sx={{ mt: 3, overflowX: "hidden" }}>
                <Table>
                  <TableHead sx={{ backgroundColor: "#EBF0F4", height: 8 }}>
                    <TableRow>
                      <TableCell>
                        <Typography>Category</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ textAlign: "center" }}>
                          Status
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ textAlign: "center" }}>
                          Action
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {displayData?.map((list) => (
                      <TableRow key={list.id}>
                        <TableCell>
                          <Typography>{list.category_name}</Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Switch checked={list.status} />
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <IconButton
                            onClick={() => {
                              onClickEdit(list);
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
          />
        )}
        {/* Edit Product Section */}
        {!addCategory && editCategory && (
          <EditCategory
            displayCategory={displayCategory}
            setDisplayCategory={setDisplayCategory}
            setEditCategory={setEditCategory}
            fetchCategoryList={fetchCategoryList}
          />
        )}
      </Box>
    </Box>
  );
};
