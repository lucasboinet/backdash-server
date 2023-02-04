import mongoose from 'mongoose'

const connect = async () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, '[mongodb]: Connection failed'));
  db.once('open', function () {
    console.log('[mongodb]: Connected successfully');
  });
}

export default {
  connect: () => connect()
}