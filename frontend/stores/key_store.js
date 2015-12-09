var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var KeyStore = new Store(Dispatcher);

var _keys = [];

KeyStore.all = function () {
  return _keys.slice();
};
