import { gql, ApolloError } from 'apollo-server'
import { messageStore } from './message';
import { contactStore } from './contact';

export const getMessages = (_, args) => {
  if(messageStore[args.userId]) {
    return messageStore[args.userId];
  } else {
    return new ApolloError('invalid id');
  }
};

export const getContacts = (_, args) => {
  if(contactStore[args.id]) {
    return contactStore[args.id]
  } else {
    return new ApolloError('invalid id');
  }
};
