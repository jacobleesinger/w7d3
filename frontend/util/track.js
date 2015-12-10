var React = require('react');
var KeyStore = require('../stores/key_store');

var Track = function(name, roll) {
  this.name = name;
  this.roll = roll;
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.time = new Date();
};

Track.prototype.addNotes = function() {
  // this.roll.push()
};
