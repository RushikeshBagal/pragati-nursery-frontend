import React from "react";
import { Chip } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export const AddressChip = ({label}) => {
    return(
        <Chip icon={<HomeIcon />} label={label} />
    );
};