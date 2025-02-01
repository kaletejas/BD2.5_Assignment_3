const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;
let cors = require('cors');
app.use(cors());


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
