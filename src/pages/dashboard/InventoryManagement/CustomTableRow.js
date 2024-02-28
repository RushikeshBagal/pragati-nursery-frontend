import React from "react";
import { Button, TableCell } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { InOutInventory } from "../InOutInventory";

export const CustomTableRow = () => {
  return (
    <>
      <TableCell>
        <Button
          onClick={() => {
            <InOutInventory />;
          }}
        >
          <ModeEditOutlineOutlinedIcon />
        </Button>
      </TableCell>
    </>
  );
};
