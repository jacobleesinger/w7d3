var React = require('react');
var KeyStore = require('../stores/key_store');
var KeyActions = require('../actions/key_actions');

var Track = function(name, roll) {
  this.name = name;
  this.roll = roll;
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.time = Date.now();
};

Track.prototype.addNotes = function(array) {
  var keys = array || KeyStore.all();
  this.roll.push({
    notes: keys,
    timeSlice: (Date.now() - this.time)
  });
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};

// Track.prototype.play = function () {
//   if(typeof this.interval === "undefined") {
//     return;
//   } else {
//     var playBackStartTime = Date.now();
//     var currentNote = 0;
//   }
//
//   for(var i = 0; i < this.roll.length; i++) {
//     setInterval( function() {
//       if(this.roll[i].notes) {
//         if(Date.now() - playBackStartTime > currentNote.timeSlice) {
//           KeyActions.keyPressed(currentNote);
//         }
//       }
//     });
//   }
//
//
// };

module.exports = Track;
