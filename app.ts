import express from 'express';
import cors from 'cors';
import initMongo from './src/db/db';
import apiRoutes from './src/api/routes';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Echo 🔝' });
});

app.use('/api', apiRoutes);

async function startApp() {
  try {
    await initMongo();
    app.listen(PORT, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server started at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
