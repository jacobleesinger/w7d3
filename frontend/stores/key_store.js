/* eslint no-use-before-define: 0 */
var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var KeyStore = new Store(Dispatcher);

var _keys = [];

window.keyStore = KeyStore;

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "KEY_PRESSED":
      addKey(payload.noteName);
      break;
    case "KEY_RELEASED":
      removeKey(payload.noteName);
      break;
  }
};

var addKey = function (key) {
  if(_keys.indexOf(key) === -1) {
    _keys.push(key);
    KeyStore.__emitChange();
  }
};

var removeKey = function (key) {
  var keyIdx = _keys.indexOf(key);
  _keys.splice(keyIdx, 1);
  KeyStore.__emitChange();
};

module.exports = KeyStore;
