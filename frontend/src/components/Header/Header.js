import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import billLogo from "../../assets/icon/bill.png";
import { logOut } from "../../store/reducerSlice/authSlice";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const { totalPrice } = useSelector((state) => state.billing);

  const handleLogout = async () => {
    dispatch(logOut());
  };

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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={billLogo} alt="logo" width={30} />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "18px",
              marginLeft: "10px",
            }}
          >
            Billing
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}
          >
            Paid Total:{" "}
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              ${totalPrice}
            </span>
          </Typography>
          <Box sx={{ marginLeft: "50px" }}>
            <span
              onClick={() => setShowProfile((prev) => !prev)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#2E3346",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <i class="ri-user-line"></i>
            </span>
            {showProfile && (
              <Box
                sx={{
                  position: "absolute",
                  top: "60px",
                  right: "20px",
                  width: "250px",
                  backgroundColor: "#fff",
                  zIndex: "10",
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 15px ",
                    transition: "all .3s ease-out",
                    ":hover": {
                      backgroundColor: "#F5F6FA",
                      transition: "all .3s ease-out",
                    },
                  }}
                >
                  <span style={{ marginRight: "10px" }}>
                    <i class="ri-user-6-line"></i>
                  </span>{" "}
                  {user.name}
                </Typography>
                <Typography
                  onClick={handleLogout}
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 15px ",
                    transition: "all .3s ease-out",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "#F5F6FA",
                      transition: "all .3s ease-out",
                    },
                  }}
                >
                  <span style={{ marginRight: "10px" }}>
                    <i class="ri-logout-circle-r-line"></i>
                  </span>{" "}
                  LogOut
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
