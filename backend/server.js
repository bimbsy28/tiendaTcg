require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connection');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
