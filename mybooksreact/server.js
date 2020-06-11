const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

app.use(express.static('client/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`port running on ${PORT}`));