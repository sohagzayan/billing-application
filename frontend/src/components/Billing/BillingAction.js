import { Box, Button } from "@mui/material";
import React from "react";

const BillingAction = ({ rowId, params }) => {
  return (
    <Box>
      <Button
        onClick={() => console.log(params)}
        sx={{
          padding: "1px 1px",
          fontSize: "15px",
          fontFamily: "Poppins",
          textTransform: "capitalize",
          color: "#1E2438",
        }}
      >
        Edit
      </Button>
      |
      <Button
        sx={{
          padding: "1px 1px",
          fontSize: "15px",
          fontFamily: "Poppins",
          textTransform: "capitalize",
          color: "#1E2438",
        }}
      >
        Delete
      </Button>
    </Box>
  );
};

export default BillingAction;
