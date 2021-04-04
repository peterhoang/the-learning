const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json({ strict: false }));
app.get('/', (req, res) => res.send('API Running...'));

// Define routes
app.use('/api/books', require('./routes/api/books'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
