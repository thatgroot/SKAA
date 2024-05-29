import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { active_network } from '../config/index';
import { useEffect, useState } from 'react';
export const DESTINATION_WALLET =
  'CiUQu8TwkwWXfr3CnUQuU28WY8gn9uo6EXXBs5kjhUgH';
// use balance hook
export const useBalance = () => {
  const wallet = useWallet();

  const connection = new Connection(active_network);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetch() {
      const balance = await connection.getBalance(
        wallet.publicKey,
        'confirmed',
      );
      setBalance((_prev) => balance / LAMPORTS_PER_SOL);
    }
    if (wallet && connection && wallet.connected) {
      fetch();
    }
  }, [wallet, connection]);
  return balance;
};
