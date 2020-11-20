const mongoose = require('mongoose')

mongoose.connection.on('open', () => console.log('db connected'))

async function connectDB({ host, port, dbName }){
  const uri = host
  await mongoose.connect(uri, {useNewUrlParser: true})
}

module.exports = connectDB