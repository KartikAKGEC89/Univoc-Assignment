const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const messageroute = require('./messageroute');
const cors = require('cors')


app.use(cors())
// `node --trace-warnings ...`
mongoose.connect("mongodb+srv://Registration:2111087@cluster0.wexksa1.mongodb.net/Univoc?retryWrites=true&w=majority")
    .then(() => console.log('Connected....'))
    .catch((err) => console.log(err));

app.use(express.json());
  
app.use('/univoc', messageroute)

app.listen(3000, () => console.log("Running"));