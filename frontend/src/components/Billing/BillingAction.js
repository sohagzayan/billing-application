import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBillingSuccess,
  deleteBilling,
} from "../../store/reducerSlice/billingSlice";
import AddBilling from "../AddBilling/AddBilling";
import { useAlert } from "react-alert";
import swal from "sweetalert";

const BillingAction = ({ rowId, params, setEditId, editId, setOpenEdit }) => {
  const dispatch = useDispatch();
  const { successDelete } = useSelector((state) => state.billing);
  const alert = useAlert();
  const deleteBillingInfo = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this billing info!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your Billing info has been deleted!", {
          icon: "success",
        });
        dispatch(deleteBilling(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  // useEffect(() => {
  //   if (successDelete) {
  //     alert.success(successDelete);
  //     dispatch(clearBillingSuccess());
  //   }
  // }, [dispatch, successDelete, alert]);

  return (
    <Box>
      <Button
        onClick={() => {
          setEditId(params.row._id);
          setOpenEdit(true);
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
        onClick={() => deleteBillingInfo(params.row._id)}
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
