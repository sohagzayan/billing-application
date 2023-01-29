import { Box, Button } from "@mui/material";
import React from "react";
import AddBilling from "../AddBilling/AddBilling";

const BillingAction = ({ rowId, params, setEditId, editId, setOpen }) => {
  return (
    <Box>
      <Button
        onClick={() => {
          setEditId(params.id);
          setOpen(true);
        }}
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
