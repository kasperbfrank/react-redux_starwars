const characterList = require('./characterList.controller');

module.exports = function(app) {
  app.route('/people')
    .get(characterList.all)
    .post(characterList.create);

  app.route('/people/:id')
    .get(characterList.one);
}