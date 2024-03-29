import React, { useEffect, useMemo, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBox = (props) => {
  const { data, handleData, title, property } = props;
  const [searchText, setSearchText] = useState("");

  const containsText = (text, searchText) => {
    return text?.toLowerCase().indexOf(searchText?.toLowerCase()) > -1;
  };

  const displayedOptions = useMemo(
    () => data.filter((option) => containsText(option[property], searchText)),
    [searchText, data, property]
  );

  useEffect(() => {
    handleData(displayedOptions);
  }, [handleData, searchText, displayedOptions]);

  return (
    <TextField
      type="text"
      fullWidth
      placeholder={title}
      onChange={(e) => setSearchText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key !== "Escape") {
          e.stopPropagation();
        }
      }}
      InputProps={{
        sx: { borderRadius: "90px", pl: "16px", pr: "16px" },
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "#5B6A88" }} />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};
