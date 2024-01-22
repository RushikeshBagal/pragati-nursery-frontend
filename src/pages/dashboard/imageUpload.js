import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import "./imageUpload.css";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

export const ImageUpload = () => {
  const [image, setImage] = useState({});
  const [isUploaded, setIsUploaded] = useState(false);
  const [imageData, setImageData] = useState({});
  const inputRef = React.useRef(null);
  const acceptedFileType = "image/jpeg, image/jpg, image/png";
  const handleDocSelect = (event) => {
    const file = Array.from(event.target?.files)[0];
    setImage(URL.createObjectURL(file));
    setIsUploaded(true);
    setImageData(file);
  };
  const onUploadButton = () => {
    inputRef.current.click();
  };
  return (
    <Box>
      <input
        ref={inputRef}
        id="input-doc-upload"
        type="file"
        accept={acceptedFileType}
        onChange={handleDocSelect}
      />
      {/* {!isUploaded && (
        <Button variant="contained" onClick={onUploadButton}>
          Upload Image
        </Button>
      )} */}
      {isUploaded && acceptedFileType.includes(imageData.type) && (
        <img
          id="frame"
          className="after-upload-image"
          src={image}
          alt="product-image"
        />
      )}
      {!isUploaded ? (
        <>
          <CloudUploadOutlinedIcon sx={{fontSize:"180px"}}/>
          <Button variant="contained" onClick={onUploadButton}>
            Upload Image
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            setImage({});
            setIsUploaded(false);
          }}
        >
          Reupload Image
        </Button>
      )}
    </Box>
  );
};
