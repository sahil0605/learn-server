const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/allRoutes')
require('dotenv').config();

const cors = require('cors');

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5100 ;
mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser: true,
useUnifiedTopology: true,}).then(()=>{
    console.log("mongo connected")
}).catch(err=>{
    console.log(err)
})
app.use('/api',routes);

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(PORT,()=>{
     console.log('server started'+ PORT);
})

