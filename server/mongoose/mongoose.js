const mongoose = require('mongoose');
// const url = process.env.MONGO_URL;
mongoose.connect('mongodb+srv://admin:<password>@cluster0.wpeu1.mongodb.net/mean-stack?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(data => {
    if (data) {
        console.log('Connection is successful');
    }
}).catch(err => {
    console.log('Connection is unsuccessful');
})
module.exports = mongoose;