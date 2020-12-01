const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/mean-stack-database";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(data => {
    if (data) {
        console.log('Connection is successful');
    }
}).catch(err => {
    console.log('Connection is unsuccessful');
})
module.exports = mongoose;