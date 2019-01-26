// equivalent of older: const express = require('express')
import buildSchema from 'graphql';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server';
import { gql } from 'apollo-server';
import { Query } from './typedefs/query';
import { Message } from './typedefs/message';

import { getMessages } from './resolvers/query';
// import userRoutes from './routes/user-routes';


const typeDefs = [Query, Message]
const resolvers = {
  Query: {
    getMessages: getMessages
  }
}

const server = new ApolloServer({typeDefs, resolvers})

const PORT = process.env.PORT || 5000;
server.listen(PORT).then(() => {
    console.log(`Listening on ${PORT}`);
})