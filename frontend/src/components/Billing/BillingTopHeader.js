import { Box, Button, Grid, Input, Typography } from "@mui/material";
import React from "react";

const BillingTopHeader = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
          backgroundColor: "#f5f6fa",
          borderRadius: "6px",
          color: "#1e2438",
          fontFamily: "Poppins",
          padding: "10px 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              marginRight: "30px",
            }}
            variant="h6"
            components="h6"
          >
            Billings
          </Typography>
          <Input
            placeholder="Search"
            sx={{
              fontFamily: "Poppins",
            }}
            type="Search"
          />
        </Box>
        <Box>
          <Button
            sx={{
              padding: "6px 15px",
              fontSize: "15px",
              fontFamily: "Poppins",
              textTransform: "capitalize",
              color: "#fff",
              backgroundColor: "#2E3346",
              transition: "all .3s ease-out",

              ":hover": {
                backgroundColor: "#2E3346",
                color: "#fff",
                transform: "scale(1.1)",
                transition: "all .3s ease-in",
              },
            }}
          >
            Add New Bill
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BillingTopHeader;
