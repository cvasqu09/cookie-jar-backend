import { gql, ApolloError } from 'apollo-server'
import { messageStore } from '../resolvers/message';

export const getMessages = (_, args) => {
  if(messageStore[args.userId]) {
    return messageStore[args.userId];
  } else {
    return new ApolloError('invalid id');
  }
}
