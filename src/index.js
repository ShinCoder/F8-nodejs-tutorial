const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');

const db = require('./config/db');

const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// body parser
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// method override
app.use(methodOverride('_method'));

// template engine
app.engine('.hbs', engine({
    extname: ".hbs",
    helpers: {
        sum: (a, b) => (a + b)
    }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// connect to db
db.connect();

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});