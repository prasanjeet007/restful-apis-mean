const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('../mongoose/mongoose');
const routerr = require('../routers/router');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", '*');
    next();
});
// app.use(cors());
    // intercept OPTIONS method if ('OPTIONS' == req.method) { res.send(200); } else { next(); } });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json())
app.use(routerr);
app.get('/', (req, res) => {
    res.send('Hello from server');
});
app.listen(PORT, () => {
 console.log(`Server is running on ${PORT}`);
})