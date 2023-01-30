import React, {
  Fragment,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import BillingAction from "./BillingAction";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { getAllBilling } from "../../store/reducerSlice/billingSlice";
import Pagination from "react-js-pagination";

const BillingTable = ({
  setEditId,
  editId,
  setOpen,
  setOpenEdit,
  openEdits,
}) => {
  const dispatch = useDispatch();
  const [rowId, setRowId] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const resultPerPage = 10;
  // const { loading, error, user } = useSelector((state) => state.user);
  const { success, loading, error, billing, filteredProductsCount } =
    useSelector((state) => state.billing);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const search = "";

  useEffect(() => {
    dispatch(getAllBilling(search, currentPage));
  }, [dispatch, currentPage]);

  const columns = useMemo(
    () => [
      {
        id: 1,
        field: "orderId",
        headerName: "#Billing ID",
        width: 150,
        sortable: false,
        filterable: false,
        cellClassName: "super-app-theme--cell",
      },
      {
        id: 2,
        field: "fullName",
        headerName: "Full Name",
        width: 200,
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
        field: "payableAmount",
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
            {...{ params, rowId, setRowId, setEditId, editId, setOpenEdit }}
          />
        ),
        width: "200",
      },
    ],
    [rowId, editId, setEditId, setOpenEdit]
  );
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "500px",
          }}
        >
          <DataGrid
            columns={columns}
            rows={billing}
            pageSize={pageSize}
            getRowId={(row) => row._id}
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
            // onCellEditCommit={(params) => setRowId(params?._id)}
          />
          <Box>
            {resultPerPage < filteredProductsCount && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={10}
                  totalItemsCount={20}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default BillingTable;
