if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configure-store.prod'); // eslint-disable-line global-require
}
else {
  module.exports = require('./configure-store.dev'); // eslint-disable-line global-require
}
