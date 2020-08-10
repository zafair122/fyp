import { Box, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";

const ProductView = () => {
  return (
    <Box p="18px" bgcolor="white" boxShadow="8px" mx="4px" borderRadius="16px">
      <img
        style={{ width: "150px", height: "150px", backgroundColor: grey[50] }}
      />
      <Typography variant="subtitle1">Title</Typography>
      <Typography variant="subtitle2" style={{ color: "#f4511e" }}>
        Description
      </Typography>
      <Typography variant="h6">RS.(xxx)</Typography>
    </Box>
  );
};

export default ProductView;
