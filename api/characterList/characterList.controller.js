const mongoose = require('mongoose');
const Character = mongoose.model('Character');

exports.all = function(req, res) {
  Character.find({}, function(err, characters) {
    if (err) {
      res.send(err);
    }
    res.send({
      count: characters.length,
      results: characters.map(c => ({ name: c.name }))
    });
  });
};

exports.create = function(req, res) {
  const newCharacter = new Character(req.body);
  newCharacter.save(function(err, character) {
    if (err) {
      res.send(err)
    }
    res.json(character);
  });
};

exports.one = function(req, res) {
  Character.find({}, function(err, characters) {
    if (err) {
      res.send(err)
    }
    const character = characters[+req.params.id - 1];
    if (!character) {
      res.status(404).send({ error: `Could not find character with id ${+req.params.id}` });
    } else {
      res.json(character);
    }
  });
}