require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connection');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Importing and using routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
