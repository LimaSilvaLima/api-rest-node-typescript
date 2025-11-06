import express from 'express';

const functionserver = express();

functionserver.use(express.json());


functionserver.get('/', (req, res) => {
  return res.send('Server is running');
});

export { functionserver };