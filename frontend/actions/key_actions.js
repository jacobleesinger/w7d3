var Dispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function(note) {
    Dispatcher.dispatch({
      actionType: "KEY_PRESSED",
      noteName: note
    });
  },

  keyReleased: function (note) {
    Dispatcher.dispatch({
      actionType: "KEY_RELEASED",
      noteName: note
    });
  }
};

module.exports = KeyActions;
