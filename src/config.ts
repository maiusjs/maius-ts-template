const staticDir = {};
const views = {
  engine: 'ejs',
  extension: 'ejs',
  viewsDir: 'views',
};
const logger = {
  directory: __dirname + '/logs',
  level: 'DEBUG',
};

export {
  staticDir as static,
  views,
  logger,
};
