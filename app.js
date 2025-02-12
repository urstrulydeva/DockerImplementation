const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
// Connecting to the MongoDB database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Defining the data schema with 'name' and 'age'
const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  timestamp: { type: Date, default: Date.now }
});

const Data = mongoose.model('Data', dataSchema);

// Middleware to parse incoming JSON data
app.use(express.json());

// Handle POST request to push 'name' and 'age' data into the database
app.post('/add-person', (req, res) => {
  // Get data from the body of the request
  const { name, age } = req.body;

  // Create a new Data object with the provided name and age
  const newData = new Data({
    name,
    age
  });

  // Save the new data to the database
  newData.save()
    .then(() => res.send('Data saved to the database'))
    .catch((err) => res.status(500).send('Error saving data: ' + err));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
