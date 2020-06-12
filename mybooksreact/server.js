const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const savedbooksroutes = require('./routes/api/savedbooksroutes');

const app = express();
//!!uses cross origin midd ware
app.use(cors()); 
//!!uses body parser middleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('DB Connected'))
	.catch((err) => console.log(err));

//!!middleware for routes file
app.use('/api/savedbooks', savedbooksroutes);

//!! has app serve the client build folder index.html
app.use(express.static('client/build'));
//!! gets all files from folder and serves html
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`port running on ${PORT}`));
