const whoIsDylan = require('./dylan-resolver')

const resolvers = {
    Query: {
        whoIsDylan
    }
}

module.exports = resolvers;