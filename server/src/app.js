const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('../mongoose/mongoose');
const routerr = require('../routers/router');
// add this code
const whitelist = ['http://localhost:4200', 'https://intense-island-95023.herokuapp.com']; // list of allow domain

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        if (whitelist.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors(corsOptions));
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