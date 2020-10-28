require('dotenv').config()
const express = require('express');
const app = express();
var port = process.env.PORT;

app.listen(port,()=>console.log(`app listen to the port ${port}`))