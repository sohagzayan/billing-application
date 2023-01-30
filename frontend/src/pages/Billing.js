import React, { useState } from "react";
import AddBilling from "../components/AddBilling/AddBilling";
import EditBilling from "../components/AddBilling/EditBilling";
import BillingTable from "../components/Billing/BillingTable";
import BillingTopHeader from "../components/Billing/BillingTopHeader";
import Layout from "../Layout/Layout";

const Billing = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  return (
    <Layout>
      <BillingTopHeader open={open} setOpen={setOpen} />
      <BillingTable
        open={open}
        setOpen={setOpen}
        editId={editId}
        setEditId={setEditId}
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
      />
      <AddBilling editId={editId} open={open} setOpen={setOpen} />
      <EditBilling
        editId={editId}
        setEditId={setEditId}
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
      />
    </Layout>
  );
};

export default Billing;
