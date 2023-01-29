import React, { useMemo, useState } from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import BillingAction from "./BillingAction";
import { grey } from "@mui/material/colors";

const BillingTable = ({ setEditId, editId, setOpen }) => {
  const [rowId, setRowId] = useState(null);
  const users = [
    {
      id: 1,
      name: "sohag",
      email: "ohga@gmail.com",
      photoUrl: "url",
      role: "admin",
      phone: "01980796731",
      paidAmount: 99,
    },
    {
      id: 2,
      name: "milon",
      email: "milon@gmail.com",
      photoUrl: "url",
      role: "admin",
      phone: "01980796731",
      paidAmount: 99,
    },
    {
      id: 3,
      name: "milon",
      email: "milon@gmail.com",
      photoUrl: "url",
      role: "admin",
      phone: "01980796731",
      paidAmount: 99,
    },
  ];

  const columns = useMemo(
    () => [
      {
        id: 1,
        field: "id",
        headerName: "Billing ID",
        width: 150,
        sortable: false,
        filterable: false,
        cellClassName: "super-app-theme--cell",
      },
      {
        id: 2,
        field: "name",
        headerName: "Full Name",
        width: 220,
      },
      {
        id: 3,
        field: "email",
        headerName: "Email",
        width: 220,
      },
      {
        id: 4,
        field: "phone",
        headerName: "Phone",
        width: 210,
        type: "singleSelect",
        // valueOptions: ["basic", "editor", "admin"],
        // editable: true,
      },
      {
        id: 5,
        field: "paidAmount",
        headerName: "paid Amount",
        width: 150,
        editable: true,
      },

      {
        id: 6,
        field: "actions",
        headerName: "Actions",
        type: "actions",
        renderCell: (params) => (
          <BillingAction
            {...{ params, rowId, setRowId, setEditId, editId, setOpen }}
          />
        ),
        width: "200",
      },
    ],
    [rowId, editId, setEditId, setOpen]
  );
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
      }}
    >
      <DataGrid
        columns={columns}
        rows={users}
        getRowId={(row) => row.id}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: "#fff",
            borderBottom: "1px solid #DAE0F1",
            fontFamily: "Poppins",
          },
        }}
        onCellEditCommit={(params) => setRowId(params.id)}
      />
    </Box>
  );
};

export default BillingTable;
