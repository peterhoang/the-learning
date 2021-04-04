const express = require('express');

const app = express();
app.use(express.json({ strict: false }));
app.get('/', (req, res) => res.send('API Running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));