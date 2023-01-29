import React from "react";
import BillingTable from "../components/Billing/BillingTable";
import BillingTopHeader from "../components/Billing/BillingTopHeader";
import Layout from "../Layout/Layout";

const Billing = () => {
  return (
    <Layout>
      <BillingTopHeader />
      <BillingTable />
    </Layout>
  );
};

export default Billing;
