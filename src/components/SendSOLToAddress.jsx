import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import React, { FC, useCallback } from "react";
import Button from "@mui/material/Button";

export default function SendSOLToAddress(props) {
  const { user } = props;
  console.log("user  desde Send Sol: ", user);

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    // 890880 lamports as of 2022-09-01

    const lamports = await connection.getMinimumBalanceForRentExemption(0);

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: "ADcZkjWSuZxDV5hLCfdUm6yqoJwkN2otUKW2tyPVh1Rz",
        lamports,
      })
    );
    //toPubkey: params.choosenAddress ==> esto es como lo tendremos
    //lamports:Number(params.choosenAmount) ==> esto es como lo tendremos

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
  }, [publicKey, sendTransaction, connection]);

  return (
    <>
      {publicKey && user.role === "Admin" ? (
        <Button
          variant="contained"
          style={{ backgroundColor: "#512da8", height: 48 }}
          onClick={onClick}
        >
          Send SOLANA
        </Button>
      ) : null}
    </>
  );
}

//for inspecting transaction
//https://solscan.io/account/ADcZkjWSuZxDV5hLCfdUm6yqoJwkN2otUKW2tyPVh1Rz?cluster=devnet

/*
email: "arturo@gmail.com"
firstName: "Arturo"
imageUrl: "https://res.cloudinary.com/dad5dandd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1664030626/AlpacaExchange/alpacaUserId2_km8k9e.png"
lastName: "Barrantes"
role: "User"
walletAddress: "CaHh7Yt814766QEUJCjwfDzHg1dqbeiJRpzyMzKNzNdi"
_id: "635a0f38de05c0ee6be97f30"
*/
