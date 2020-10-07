const express = require('express');
const app = express();
const Home = require('./routes/Home');



const PORT =  process.env.PORT || 5000;

app.use('/', Home);
app.listen(PORT, () => {
    console.log(`starting server on ${PORT}`);
})