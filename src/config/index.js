import { clusterApiUrl } from '@solana/web3.js';

export const config = {
  rpc: {
    devnet: clusterApiUrl('devnet'),
    mainnet:
      'https://capable-alien-paper.solana-mainnet.quiknode.pro/c6051cb107ec1965dbdabfe9a17f8bd67ad89600',
  },
};

export const active_network = config.rpc.devnet;
