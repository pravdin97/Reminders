import mongoose from 'mongoose';

export default async () => {
  await mongoose.connect('mongodb://localhost:27018/reminders', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  // tslint:disable-next-line:no-console
  db.on('error', console.error.bind(console, 'Connection error:'));
  db.once('open', () => {
    // tslint:disable-next-line:no-console
    console.log('Connected successfully');
  });
};
