require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');

// Connect DB //
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 4000;

app.server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})