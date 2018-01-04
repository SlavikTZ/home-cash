const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const configDB = require('./config/database');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(configDB.uri, {useMongoClient: true}, (err) => {
    if (err) {
        console.log("Cloud NOT connect to database")
    } else {
        console.log(`Connected to database: ${configDB.db}`);
    }
});


app.use(cookieParser('Secret String'));
app.use(express.static(`${__dirname}/../dist/`));
app.use('/test', (req, res, next) => {
    console.log(req.cookies);
    res.cookie('login', 'admin', {maxAge: 10000, signed: true});
    res.sendFile(path.resolve(`${__dirname}/../dist/test.html`));
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server runing on port:${port}`);
});