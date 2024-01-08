const express = require('express');
const httpErrors = require('http-errors');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.post('/', (req,res) => {
    res.send('hello guys ')
})

app.listen(PORT, () => {
    console.log(`server is listening to port to  ${PORT}`)
})