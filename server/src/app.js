const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('../mongoose/mongoose');
const routerr = require('../routers/router');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
    // intercept OPTIONS method if ('OPTIONS' == req.method) { res.send(200); } else { next(); } });
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