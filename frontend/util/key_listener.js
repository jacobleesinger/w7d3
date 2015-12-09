var KeyActions = require('../actions/key_actions');

$(document).on("keydown", function (e) {
  KeyActions.keyPressed(e.event.value);
});
// add real function
