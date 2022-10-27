import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';

export default function SendSOLToRandomAddress() {
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
               lamports 
            })
        );
        //toPubkey: params.choosenAddress ==> esto es como lo tendremos
        //lamports:Number(params.choosenAmount) ==> esto es como lo tendremos

        console.log("yo soy la transaccion", transaction)

        const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight }
        } = await connection.getLatestBlockhashAndContext();

        const signature = await sendTransaction(transaction, connection, { minContextSlot });

        console.log("yo soy signature", signature)

       const confirmation =  await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });

       console.log("yo soy confirmation", confirmation)

    }, [publicKey, sendTransaction, connection]);

    return (
        <button onClick={onClick} disabled={!publicKey}>
            Send SOL to: 
            
        </button>
    );
};

//for inspecting transaction
//https://solscan.io/account/ADcZkjWSuZxDV5hLCfdUm6yqoJwkN2otUKW2tyPVh1Rz?cluster=devnet
