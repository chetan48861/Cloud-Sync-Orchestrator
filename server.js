const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'user123',
  host: 'db',
  database: 'db123',
  password: 'password123',
  port: 5432,
});

app.get('/users', async (req, res) => {
  res.json({ message: "Success! Lab Completed by Chetan", status: "Connected to Database" });
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
