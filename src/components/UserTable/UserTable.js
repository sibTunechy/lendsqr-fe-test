import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";

import { BsFilter } from "react-icons/bs";

import MoreIcon from "../MoreIcon/MoreIcon";

const UserTable = ({ column, row }) => {
  const { isLoading, tableColumn, tableRow, tableColumnName } = useSelector(
    (store) => store.table
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableColumnName.map((column) => (
                <TableCell key={column}>
                  {/* {column === "" ? (
                    <>
                      {column}
                      <BsFilter />
                      </>
                      ) : (
                          { column }
                        )} */}

                  {column}
                  <BsFilter />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRow
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {tableColumn.map((column) => {
                      const value = row[column];

                      if (value == undefined) {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <MoreIcon id={row.id} />
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableRow.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UserTable;
