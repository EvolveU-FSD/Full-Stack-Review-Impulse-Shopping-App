const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String
}));

app.use(cors());
app.use(express.json());

app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/api/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

app.delete('/api/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log('API listening on http://localhost:3000'));
