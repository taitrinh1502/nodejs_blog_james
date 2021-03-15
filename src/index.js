const path = require('path');
const express = require('express');
const app = express();
const route = require('./routes');

const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;

//img folder
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({extended : true}));
app.use(express.json());


//HTTP logger
app.use(morgan('combined'));

//template rename 
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

        // route INIT
route(app);

//port listen
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));