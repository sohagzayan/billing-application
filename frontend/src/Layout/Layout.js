import React, { Fragment } from "react";
import { Container } from "@mui/material";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div>
        <Header />
        <Container maxWidth="lg">
          <div>
            <div>{children}</div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Layout;
