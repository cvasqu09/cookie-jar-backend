import { ApolloServer } from 'apollo-server';
import { Query } from './typedefs/query';
import { Message } from './typedefs/message';
import { getMessages, getContacts } from './resolvers/query';
import {Contact} from "./typedefs/contact";

const typeDefs = [Query, Message, Contact];
const resolvers = {
  Query: {
    getMessages: getMessages,
    getContacts: getContacts
  }
};

const server = new ApolloServer({typeDefs, resolvers})

const PORT = process.env.PORT || 5000;
server.listen(PORT).then(() => {
    console.log(`Listening on ${PORT}`);
})
