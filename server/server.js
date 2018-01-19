
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const configDB = require('./config/database');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const nodeRoutes = require('./Node/NodeRoutes');
const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(configDB.uri, {useMongoClient: true}, (err) => {
    if(err) {
        console.log("Cloud NOT connect to database")
    } else {
        console.log(`Connected to database: ${configDB.db}`);
}
});

app.use(express.static(`${__dirname}/../dist/`));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/nodes', nodeRoutes);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});
const port = 3001;
app.listen(port, () => {
    console.log(`Server runing on port:${port}`);
});