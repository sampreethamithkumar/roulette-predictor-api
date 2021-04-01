const mongoose = require('mongoose');

async function mongoConnection () {
    const connection = await mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`Mongodb connected at: ${connection.connection._connectionString}`);
}

module.exports.mongoConnection = mongoConnection;