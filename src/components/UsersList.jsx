import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function UsersList(props) {
  const { users } = props;
  console.log("props in userList", users);

  const rows = users;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="center">Wallet</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
              {row.role === "User" ? (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Copy the address and click">
                      <Link to="/sendSolana">{row.walletAddress}</Link>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.firstName}</TableCell>
                </TableRow>
              ) : null}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

