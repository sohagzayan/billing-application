import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError, register } from "../store/reducerSlice/authSlice";
import { useAlert } from "react-alert";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.user
  );
  const alert = useAlert();

  const FormSignUp = styled("form")(({ theme }) => ({
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  }));

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      confirmPassword,
    };
    dispatch(register(userData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearAuthError());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, isAuthenticated, navigate, alert, error]);

  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item md={4} sx={{ display: { md: "block", xs: "none" } }}>
            <Box
              sx={{
                backgroundColor: "#3BB795",
                height: "100vh",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  color: "#fff",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                To keep connected with us please <br /> login with your personal
                info
              </Typography>
              <Button
                onClick={() => navigate("/login")}
                sx={{
                  color: "#fff",
                  border: "1px solid #fff",
                  padding: "10px 50px",
                  borderRadius: "20px",
                  transition: "all .3s ease-out ",
                  ":hover": {
                    color: "#fff",
                    transform: "scale(1.1)",
                    transition: "all .3s ease-in ",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  color: "#3BB795",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Create Account
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                use your email for registration
              </Typography>
              <Box
                sx={{
                  width: { md: "50%", xs: "80%" },
                }}
              >
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  sx={{
                    width: "100%",
                    fontFamily: "Poppins",
                    marginBottom: "8px",
                  }}
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                />
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  sx={{
                    width: "100%",
                    fontFamily: "Poppins",
                    marginBottom: "8px",
                  }}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
                <FormControl
                  sx={{ width: "100%", marginBottom: "10px" }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-passwords">
                    Password
                  </InputLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Conform Password
                  </InputLabel>
                  <Input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Button
                  onClick={handleRegister}
                  sx={{
                    backgroundColor: "#3BB795",
                    color: "#fff",
                    marginTop: "15px",
                    padding: "10px 50px",
                    borderRadius: "20px",
                    transition: "all .3s ease-out ",
                    ":hover": {
                      backgroundColor: "#3BB795",
                      color: "#fff",
                      transform: "scale(1.1)",
                      transition: "all .3s ease-in ",
                    },
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Register;
