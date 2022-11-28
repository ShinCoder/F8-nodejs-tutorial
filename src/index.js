const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const db = require('./config/db');

const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('.hbs', engine({
    extname: ".hbs"
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './resources/views'));

// connect to db
db.connect();

// route init
route(app);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});