import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import "./ImageUpload.css";

export const ImageUpload = (props) => {
  const { setImageData, imageData } = props;
  const [image, setImage] = useState({});
  const [isUploaded, setIsUploaded] = useState(false);
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
      {isUploaded && acceptedFileType.includes(imageData.type) && (
        <img
          id="frame"
          className="after-upload-image"
          src={image}
          alt="product"
        />
      )}
      {!isUploaded ? (
        <>
          <img
            id="frame"
            src={imageData}
            alt="product"
            width={"200px"}
            height={"180px"}
          />
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
