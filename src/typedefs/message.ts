import { gql } from 'apollo-server';

export const Message = gql`
  type Message {
    content: String!
    timestamp: String
    fromMe: Boolean
  }
`