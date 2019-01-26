import { gql } from 'apollo-server';

export const Contact = gql`
  type Contact {
      id: String!
      name: String!
      email: String!
      phone: String!
  }
`;
