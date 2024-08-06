import express from 'express';
import { drivers } from './data.js'

const baseAPIRoute = '/api/v1';

const app = express();

app.get(baseAPIRoute + '/drivers', (req, res) => {
  res.status(200).send(drivers);
})

app.get(baseAPIRoute + "/drivers/standings/:position", (req, res) => {
  const { position } = req.params;
  const selectedDriver = drivers[position - 1]
  res.status(200).send(selectedDriver);
});

app.get(baseAPIRoute + "/drivers/:id", (req, res) => {
  const { id } = req.params;
  const selectedDriver = drivers.find((drivers) => drivers.id === id)
  res.status(200).send(selectedDriver);
});

const port = 3001;
app.listen(port, () => console.log('API rodando com sucesso')) 