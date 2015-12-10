var React = require('react');
var KeyStore = require('../stores/key_store');
var Note = require('../util/note');
var TONES = require('../constants/tones');

var Key = React.createClass({

  getInitialState: function () {
    return({playing: false});
  },

  componentDidMount: function() {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addListener(this.handleKeyStoreChange);
  },

  componentWillUnmount: function () {
    KeyStore.removeListener(this.handleKeyStoreChange);
  },

  handleKeyStoreChange: function() {
    var keys = KeyStore.all();

    for(var i = 0; i < keys.length; i++) {
      if(keys[i] === this.props.noteName) {
        this.note.start();
        this.setState({playing: true});
        return;
      }
    }
    this.note.stop();
    this.setState({playing: false});
  },

  render: function() {
    var classy = (this.state.playing ? "on" : "off");
    
    return (
      <li className={classy}>
        {this.props.noteName}
      </li>
    );
  }
});

module.exports = Key;
