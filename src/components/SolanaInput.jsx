import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {useState}  from "react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { FC, useCallback } from "react";
import * as solanaWeb3 from "@solana/web3.js";

const theme = createTheme();

export default function SolanaInput(props) {
    const [destinataryAddress,setDestinataryAddress] = useState(undefined)
    const [sendAmount,setSendAmount] = useState(undefined)
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

const {user} = props;

const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event)
    //here is where we have the axios call
    const data = new FormData(event.currentTarget);

    let values = {
        destinataryWallet: data.get("destinataryWallet"),
        solanaAmount: Number(data.get("solanaAmount")),
    };
    setDestinataryAddress(values.destinataryWallet)
    setSendAmount(values.solanaAmount)
    console.log("los valores del formulario",sendAmount,destinataryAddress )
  };
  
 const onClick= useCallback(async () => {

    console.log("soy amount input", sendAmount )
      if (!publicKey) throw new WalletNotConnectedError();
  
      // 890880 lamports as of 2022-09-01
  const costInLamports = await connection.getMinimumBalanceForRentExemption(0);
const lamports = (Number(solanaWeb3.LAMPORTS_PER_SOL))*sendAmount  // esto es 1
   //sendAmount = 100, number
  console.log("yo soy lamports", lamports)
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: destinataryAddress,
          lamports,
        })
      );
    
      console.log("am transaction", transaction);
  
      const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight },
      } = await connection.getLatestBlockhashAndContext();
  
      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      });
  
      console.log("Signature", signature);
  
      const confirmation = await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      });
  
      console.log("Confirmation", confirmation);
    }, [publicKey, sendTransaction, connection,sendAmount]);


console.log("solana input", user)



  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://miro.medium.com/max/650/0*UZLct2SobU0yaVB0.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Input Destinatary Address & Cashback Amount
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="solanaAmount"
                type="number"
                label="Solana Amount"
                name="solanaAmount"
                autoComplete="Add cashback solana amount"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="destinataryWallet"
                label="Destinatary Wallet"
                name="destinataryWallet"
                autoComplete="Add Destinatary Wallet"
                autoFocus
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              
            
<>
      {publicKey && user.role === "Admin" ? (
        <Button sx={{ mt: 3, mb: 2 }}
          type="submit"
          variant="contained"
          style={{ backgroundColor: "#512da8", height: 48 }}
          onClick={onClick}
        >
          Send SOLANA
        </Button>
      ) : null}
    </>






            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
