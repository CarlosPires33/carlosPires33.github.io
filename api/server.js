const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('./DB')
const commentRoute = require('./comment.route')


mongoose.connect(database.DB, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected')
});

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api', commentRoute)
app.listen(PORT, ()=>{
  console.log(`Server is running on Port ${PORT}`)
})


