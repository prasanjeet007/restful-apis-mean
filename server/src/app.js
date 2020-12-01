const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('../mongoose/mongoose');
const routerr = require('../routers/router');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
app.use(routerr);
app.get('/', (req, res) => {
    res.send('Hello from server');
});
app.listen(PORT, () => {
 console.log(`Server is running on ${PORT}`);
})