import React, { useState } from "react";
import { SearchBox } from "../../components/common/SearchBox";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

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

export const AddCategory = () => {
  const [addCategory, setAddCategory] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        pt: 19,
        mb: 10
      }}
    >
      <Box sx={{ width: "644px" }}>
        {!addCategory ? (
          <>
            <Box>
              <Typography variant="topHeading">Add New Category</Typography>
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
                      {/* <TableCell sx={{flexDirection:"row", display:"flex", justifyContent:"space-between"}}>
                            <Typography>Category</Typography>
                            <Typography>Action</Typography>
                        </TableCell> */}
                      <TableCell>
                        <Typography>Category</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>Action</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead >
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
                label="Category Name"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box
              sx={{
                margin: "16px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button variant="outlined" onClick={() => setAddCategory(false)}>
                Back
              </Button>
              <Button variant="contained" onClick={() => setAddCategory(false)}>
                Submit
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
