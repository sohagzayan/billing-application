import { Box } from "@mui/material";
import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        left: "0%",
        bottom: "0%",
      }}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </Box>
  );
};

export default Loader;
