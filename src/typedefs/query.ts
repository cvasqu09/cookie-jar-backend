import { gql } from 'apollo-server';

export const Query = gql`
  type Query {
    getMessages(userId: String!): [Message]
  }
`;
