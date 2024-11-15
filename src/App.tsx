import React from 'react';
import HomePage from './components/HomePage';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";


function App() {
  return (
    <DynamicContextProvider
    settings={{
      environmentId: import.meta.env.VITE_DYNAMIC_ENV_ID, // Use the environment variable
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <HomePage />
    </DynamicContextProvider>
  );
}

export default App;