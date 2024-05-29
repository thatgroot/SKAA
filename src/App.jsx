// @ts-nocheck
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
// import ILOs from 'pages/ILOs';
// import Dashboard from 'pages/Dashboard';
import "./App.css";
import { useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import BasicLayout from "layout/BasicLayout";
import Home from "pages/Home";
import { Toaster } from "react-hot-toast";
import { active_network } from "config";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<BasicLayout />}>
        <Route path="" index element={<Home />} />
      </Route>
    </Route>
  )
);

function App() {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );
  return (
    <ConnectionProvider endpoint={active_network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <RouterProvider router={routes} />
        </WalletModalProvider>
      </WalletProvider>
      <Toaster />
    </ConnectionProvider>
  );
}

export default App;
