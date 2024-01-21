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
      }}
    >
      <Box sx={{ width: "644px" }}>
        {!addCategory ? (
          <>
            <Box
              sx={{
                margin: "16px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="contained" onClick={() =>setAddCategory(true)}>
                Add Category
              </Button>
            </Box>
            <SearchBox />
            <TableContainer sx={{ mt: 3 }}>
              <Table>
                <TableHead>
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
                justifyContent: "flex-end",
              }}
            >
              <Button variant="contained" onClick={() =>setAddCategory(false)}>Submit</Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
