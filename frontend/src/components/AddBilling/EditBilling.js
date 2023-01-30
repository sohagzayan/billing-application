import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewBilling,
  clearBillingError,
  clearBillingSuccess,
  updateBillingInfo,
} from "../../store/reducerSlice/billingSlice";
import { useAlert } from "react-alert";
import { store } from "../../store/store";
import { loadUser } from "../../store/reducerSlice/authSlice";
import { getBillingDetails } from "../../store/reducerSlice/billingDetailsSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  // boxShadow: 24,
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  p: 3,
};

const EditBilling = ({ setOpenEdit, openEdit, editId, setEditId }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [payableAmount, setPayableAmount] = useState("");
  const { successUpdate } = useSelector((state) => state.billing);
  const { loading, error, billing } = useSelector(
    (state) => state.billingDetails
  );

  const handleOpen = () => setOpenEdit(true);
  const handleClose = () => setOpenEdit(false);

  const handleUpdateBilling = async (e) => {
    e.preventDefault();
    const billingData = {
      fullName,
      email,
      phone,
      payableAmount,
    };
    dispatch(updateBillingInfo(editId, billingData));
    // store.dispatch(loadUser());
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearBillingError());
    }
    if (successUpdate) {
      alert.success(successUpdate);
      dispatch(clearBillingSuccess());
      setFullName("");
      setEmail("");
      setPhone("");
      setPayableAmount("");
      setOpenEdit(false);
    }
    if (editId) {
      dispatch(getBillingDetails(editId));
    }
    if (!openEdit) {
      setEditId(null);
    }
  }, [
    dispatch,
    successUpdate,
    error,
    alert,
    setOpenEdit,
    editId,
    setEditId,
    openEdit,
  ]);

  useEffect(() => {
    if (billing) {
      setFullName(billing.fullName);
      setEmail(billing.email);
      setPhone(billing.phone);
      setPayableAmount(billing.payableAmount);
    }
  }, [billing]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEdit}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openEdit}>
          <Box className="addNewBillingModal">
            <Typography
              sx={{
                fontFamily: "Poppins",
                textAlign: "center",
                fontSize: "20px",
                marginBottom: "30px",
              }}
            >
              Update Your Billing
            </Typography>
            <Box>
              <form action="" onSubmit={handleUpdateBilling}>
                <TextField
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  required
                  type="text"
                  sx={{ width: "100%", marginBottom: "15px" }}
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  type="email"
                  sx={{ width: "100%", marginBottom: "15px" }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                  type="text"
                  sx={{ width: "100%", marginBottom: "15px" }}
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => setPayableAmount(e.target.value)}
                  value={payableAmount}
                  required
                  type="text"
                  sx={{ width: "100%", marginBottom: "15px" }}
                  id="outlined-basic"
                  label="Payable Amount"
                  variant="outlined"
                />
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#2E3346",
                    color: "#fff",
                    padding: "10px 30px",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                    transition: "all .3s ease-out",
                    borderRadius: "20px",
                    ":hover": {
                      backgroundColor: "#2E3346",
                      color: "#fff",
                      transform: "scale(1.1)",
                      transition: "all .3s ease-in",
                    },
                  }}
                >
                  Update Billing
                </Button>
              </form>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditBilling;
