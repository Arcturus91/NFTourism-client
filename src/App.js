import { useState } from "react";
import "./App.css";
import routes from "./config/routes";
import Stack from "@mui/material/Stack";
import { Routes, Route } from "react-router-dom";
import { logoutWs } from "./services/auth-ws";
import { useNavigate } from "react-router-dom";
import { Navbar, SendSOLToRandomAddress } from "./components";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import * as solanaWeb3 from "@solana/web3.js";
import { useMemo } from "react";

require("./App.css");
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  return (
    <Context>
      <Content />
    </Context>
  );
}

export default App;

const Context = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
const Content = () => {
  console.log("i am web3, buttonn", solanaWeb3);

  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  function authentication(user) {
    setUser(user);
  }

  function handleLogout() {
    logoutWs().then((res) => {
      const { data, status, errorMessage } = res;

      if (status) {
        navigate("/");
        setUser(null);
      } else {
        alert(errorMessage);
      }
    });
  }

  return (
    <div className="App">
      <Navbar user={user} handleLogout={handleLogout} />

      {user ? (
        <>
          <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }} >
            
            <WalletMultiButton />
            <SendSOLToRandomAddress user={user} />
          </Stack>
        </>
      ) : null}

      <Routes>
        {routes({ user, authentication }).map(
          ({ path, element }, index_route) => (
            <Route key={path} {...{ path, element }} />
          )
        )}
      </Routes>
    </div>
  );
};
