import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMER_SATISFACTION } from '../queries';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrasi elemen dan plugin yang diperlukan
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMER_SATISFACTION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const satisfiedCount = data.satisfiedCustomers.length;
  const dissatisfiedCount = data.dissatisfiedCustomers.length;

  const chartData = {
    labels: ['Puas', 'Tidak Puas'],
    datasets: [
      {
        data: [satisfiedCount, dissatisfiedCount],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
