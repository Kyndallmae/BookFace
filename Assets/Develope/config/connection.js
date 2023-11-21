const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://Carothers:Corrine113090!@cluster0.7eyvk8w.mongodb.net/?retryWrites=true&w=majority';

connect(connectionString);

module.exports = connection;