const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/', express.static(path.join(__dirname, "./client")))

app.listen(port, () => console.log(`We on port ${port}`));