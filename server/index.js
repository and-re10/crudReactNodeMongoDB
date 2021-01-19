// Server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.listen(3001, () => console.log('Running on port 3001'));