import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function SendingSuccess(props) {
  const { signature, destinataryAddress, sendConfirmation, user } = props;
  //String                    //number
  const block = sendConfirmation.context.slot;
  const adminWallet = user.walletAddress;

  console.log("soy props desde el Solana input", sendConfirmation.context.slot);
  function createData(signature, block, instructions, by) {
    return { signature, block, instructions, by };
  }

  const rows = createData(signature, block, "Sol-Transfer", adminWallet);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        Your Crypto currency was sent.
        <a
          href={`https://solscan.io/token/${destinataryAddress}?cluster=devnet`}
          target="_blank"
          rel="noreferrer"
        >
          Check it Here
        </a>
      </Alert>

      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Solana transfer</StyledTableCell>
              <StyledTableCell align="left">Data</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Signature
              </StyledTableCell>
              <StyledTableCell align="left">{rows.signature}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Block #
              </StyledTableCell>
              <StyledTableCell align="left">{rows.block}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Instructions
              </StyledTableCell>
              <StyledTableCell align="left">
                {rows.instructions}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                By
              </StyledTableCell>
              <StyledTableCell align="left">{rows.by}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
