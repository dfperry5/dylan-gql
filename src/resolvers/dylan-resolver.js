const data = require('../dataset');

const dylan = (_, __, {dataSources}) => {
    console.log(data);
    const dylan = {
        name: data.name,
        interests: data.interests
    }
    return data
}

module.exports = dylan;