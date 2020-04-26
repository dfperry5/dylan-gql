// NPM Dependencies
const { ApolloServer } = require('apollo-server-express')
const https = require('https')
const fs = require('fs')

// Inner App Dependencies
const typeDefs = require('./schemas');
const resolvers = require('./resolvers')
const app = require('./middleware')

// Create GraphQL Layer
const apolloGql = new ApolloServer({
    typeDefs,
    resolvers,
    graphqlPath: "/graphql"
})

// Apply other express middleware and define path
apolloGql.applyMiddleware({
    app, 
    path: '/dylan'
})

// could add https certs in here
const options = {}

// Create Server
const server = https.createServer(
    options,
    app
)

// Start Server
app.listen({
    port: 8443
}, () => {
    console.log(`Server ready at https://localhost:8443/graphql`);
})
