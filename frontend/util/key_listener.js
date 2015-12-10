var KeyActions = require('../actions/key_actions');

var mapping = {
  51: "A4",
  52: "B4",
  53: "C4",
  54: "D4",
  55: "E4",
  56: "F4",
  57: "G4"
};

$(document).on("keydown", function (e) {
  var note = mapping[e.keyCode];
  KeyActions.keyPressed(note);
});

$(document).on("keyup", function (e) {
  var note = mapping[e.keyCode];
  KeyActions.keyReleased(note);
});
