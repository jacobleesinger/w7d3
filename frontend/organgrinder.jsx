var ReactDOM = require('react-dom');
var React = require('react');
var Key = require('./components/key');
var KeyListener = require('./util/key_listener');
var Organ = require('./components/organ');

var tones = ["A4", "B4", "C4", "D4", "E4", "F4", "G4"];

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#root');
  ReactDOM.render(<Organ tones={tones}/>, root);
});
