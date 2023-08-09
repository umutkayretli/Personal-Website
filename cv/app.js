const   express = require('express'),
        bodyParser = require('body-parser'),
        expressSession = require('express-session'),
        nodemailer = require('nodemailer'),
        app = express();

//routes
const   indexRoutes = require('./routes/indexRoutes');


//App Config
app.set('view engine', 'ejs'); 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Share Current User info within all routes
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

app.use(indexRoutes);

const server = app.listen(3000, () => {
    console.log('Listening on the port 3000')
})