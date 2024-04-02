import { Chip, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WorkIcon from "@mui/icons-material/Work";

export const AddressChip = ({ label }) => {
  return (
    <Chip
      variant="outlined"
      icon={
        label === "Home" ? (
          <HomeIcon sx={{ width: "16px" }} />
        ) : label === "Work" ? (
          <WorkIcon sx={{ width: "16px" }} />
        ) : (
          <ApartmentIcon sx={{ width: "16px" }} />
        )
      }
      label={
        <Typography pl={0} fontSize={"14px"}>
          {label}
        </Typography>
      }
      sx={{ height: "max-content", mb: "4px" }}
    />
  );
};
