import { gql } from '@apollo/client';

export const GET_CUSTOMER_SATISFACTION = gql`
  query GetCustomerSatisfaction {
    satisfiedCustomers: customer_satisfaction(where: { emotional: { _eq: "happy" } }) {
      id
      costumer_id
      timestamp
    }
    dissatisfiedCustomers: customer_satisfaction(where: { emotional: { _eq: "sad" } }) {
      id
      costumer_id
      timestamp
    }
  }
`;
