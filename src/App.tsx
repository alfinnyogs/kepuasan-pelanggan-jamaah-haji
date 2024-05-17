import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import PieChart from './components/PieChart';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Customer Satisfaction Chart</h1>
        <PieChart />
      </div>
    </ApolloProvider>
  );
};

export default App;
