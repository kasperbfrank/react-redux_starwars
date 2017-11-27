'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CharacterSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  created: {
    type: Date,
    default: Date.now
  },
  height: {
    type: Number,
    required: 'Height is required'
  },
  mass: {
    type: Number,
    required: 'Weight is required'
  },
  gender: {
    type: String,
    required: 'Gender is required'
  }
});

module.exposts = mongoose.model('Character', CharacterSchema);