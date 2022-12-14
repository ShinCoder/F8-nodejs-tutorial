const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
  app.use('/', siteRouter);

  app.use('/news', newsRouter);

  app.use('/courses', coursesRouter);

  app.use('/me', meRouter);

  app.use((req, res) => {
    res.status(404).send("Nothing here");
  });

  app.use((err, req, res, next) => {
    res.status(500).send("FUck");
  });
}

module.exports = route;
