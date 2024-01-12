const express = require('express');
const bodyParser = require('body-parser');
const pdfRoutes = require('./routes/pdfRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/pdf', pdfRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;