import { Box, Typography } from "@mui/material";
import React from "react";
import billLogo from "../../assets/icon/bill.png";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f6fa",
        color: "#1e2438",
        fontFamily: "Poppins",
        marginBottom: "40px",
        padding: "10px 4px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "95%",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <Box>
          <img src={billLogo} alt="logo" width={50} />
        </Box>
        <Box>
          <Typography
            sx={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "18px" }}
          >
            Paid Total:{" "}
            <span style={{ fontSize: "20px", fontWeight: "500" }}>৳4545</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
