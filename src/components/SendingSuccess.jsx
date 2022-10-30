import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function SendingSuccess(props) {

    const {signature, destinataryAddress, sendConfirmation, user} = props
              //String                    //number
              const block = sendConfirmation.context.slot
              const adminWallet = user.walletAddress

    console.log("soy props desde el Solana input", sendConfirmation.context.slot)
    function createData(signature, block, instructions, by ) {
      return { signature, block, instructions, by  };
    }
    
    const rows = createData(signature, block, 'Sol-Transfer', adminWallet);

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>

      <Alert severity="success">Your Crypto currency was sent. 
      

<a href={`https://solscan.io/token/${destinataryAddress}?cluster=devnet`} target="_blank" rel="noreferrer">
Check it Here
        </a>
      
      </Alert>


    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Solana transfer</StyledTableCell>
            <StyledTableCell align="left">Data</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Signature</StyledTableCell>
              <StyledTableCell align="left">{rows.signature}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Block #</StyledTableCell>
              <StyledTableCell align="left">{rows.block}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Instructions</StyledTableCell>
              <StyledTableCell align="left">{rows.instructions}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">By</StyledTableCell>
              <StyledTableCell align="left">{rows.by}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>

    </Stack>

  );
}

{/* 
<StyledTableCell align="right">Instructions</StyledTableCell>
            <StyledTableCell align="right">By</StyledTableCell>


              <StyledTableCell component="th" scope="row">
                {row.signature}
              </StyledTableCell>
              <StyledTableCell align="right">{row.block}</StyledTableCell>
<StyledTableCell align="right">{row.instructions}</StyledTableCell>
              <StyledTableCell align="right">{row.by}</StyledTableCell>

 */}
//////
/*
function createData(signature, calories, instructions, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];


export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

*/