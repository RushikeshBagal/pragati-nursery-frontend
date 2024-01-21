import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"

export const SearchBox = () => {
    return(
        <TextField
        type="text"
        fullWidth
        placeholder="Search"
        // onChange={(e) => setSearchText(r.target.value)}
        onKeyDown={(e) => {
            if(e.key !== "Escape") {
                e.stopPropagation();
            }
        }}
        InputProps={{
            sx: {borderRadius: "90px", pl: "16px", pr: "16px"},
            endAdornment: (
                <InputAdornment position="end">
                    <SearchIcon sx={{color:"#5B6A88"}}/>
                </InputAdornment>
            ),
        }}
        variant="outlined"
        />
    );
};