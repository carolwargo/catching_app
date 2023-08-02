const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const config = require('./config');
const mongoose = require('mongoose');
const {typeDefs, resolvers} = require('./schema');
const { viteMiddleware, createViteDevServer } = require('./viteMiddleware'); 

const app= express();
const PORT = import.meta.env.REACT_APP_NAME || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const db = require('./config/connection');

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (import.meta.env.NODE_ENV === 'production') {  
  createViteDevServer().then((viteDevServer) => {
    app.use(viteMiddleware);
    server.applyMiddleware({ app });
  });
} else {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
  server.applyMiddleware({ app });
}

//Create new instance of Apollo server and pass in schema data
const startApolloServer = async () => {
  await server.start();
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

//Call the async function to start server
startApolloServer();

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


