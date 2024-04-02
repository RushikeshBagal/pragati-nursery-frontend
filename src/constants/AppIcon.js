import React from "react";

import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  YouTube,
  CallRounded,
  EmailRounded,
  LocationOnRounded,
  MessageRounded,
  AddCircleOutline,
  LibraryAdd,
  Inventory,
  PriceChange,
  PieChart,
  ShoppingCartCheckoutOutlined,
  NoteAltOutlined
} from "@mui/icons-material";

export const AppIcon = (props) => {
  const Icons = {
    FacebookOutlined: <FacebookOutlined {...props} />,
    Instagram: <Instagram {...props} />,
    LinkedIn: <LinkedIn {...props} />,
    YouTube: <YouTube {...props} />,
    CallRounded: <CallRounded {...props} />,
    EmailRounded: <EmailRounded {...props} />,
    LocationOnRounded: <LocationOnRounded {...props} />,
    MessageRounded: <MessageRounded {...props} />,
    AddCircleOutline: <AddCircleOutline {...props} />,
    LibraryAdd: <LibraryAdd {...props} />,
    Inventory: <Inventory {...props} />,
    PriceChange: <PriceChange {...props} />,
    PieChart: <PieChart {...props} />,
    ShoppingCartCheckoutOutlined: <ShoppingCartCheckoutOutlined {...props} />,
    NoteAltOutlined: <NoteAltOutlined {...props} />,
  };
  return Icons[props.name];
};
