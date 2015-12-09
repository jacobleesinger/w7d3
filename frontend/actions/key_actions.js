var Dispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function(key) {
    Dispatcher.dispatch({
      actionType: "KEY_PRESSED",
      noteName: key
    });
  }


};

module.exports = KeyActions;
