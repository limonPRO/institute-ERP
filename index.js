const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/studenterp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});
app.use(express.json());
app.use('/api', routes);
app.get('/',(req,res)=>{
    res.send("working")
})
const port = 9000;


app.listen(port, () => {
  console.log(` Server running on port ${port}`);
});
