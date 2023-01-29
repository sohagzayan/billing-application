import "./App.css";
import { Routes, Route } from "react-router-dom";
import Billing from "./pages/Billing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Fragment, useEffect } from "react";
import { store } from "./store/store";
import { loadUser } from "./store/reducerSlice/authSlice";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import { useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
import { useAlert } from "react-alert";

function App() {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const alert = useAlert();

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/" element={<Billing />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </Fragment>
  );
}

export default App;
