import React from 'react';
import HomePage from './components/HomePage';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";


function App() {
  return (
    <DynamicContextProvider
    settings={{
      // Find your environment id at https://app.dynamic.xyz/dashboard/developer
      environmentId: "bbc8819d-f94e-4f1e-8969-460a2361b06b",
      
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <HomePage />
    </DynamicContextProvider>
  );
}

export default App;