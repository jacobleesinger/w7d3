var React = require('react');
var KeyStore = require('../stores/key_store');
var Track = require('../utils/track');

var Recorder = React.createClass({
  getInitialState: function () {
    return ({
      isRecording: false,
      track: new Track()
    });
  },

  startRecording: function () {
    this.state.track.startRecording();
    this.setState({isRecording: true});
    KeyStore.addListener(this.handleKeyStoreChange);
  },

  stopRecording: function () {
    this.state.track.stopRecording();
    this.setState({isRecording: false});
  },

  handleKeyStoreChange: function() {
    this.state.track.addNotes();
  },

  render: function () {
    return(
      <div>
        <button
          value="start recording"
          onClick={this.startRecording}
        />

        <br/>

        <button
          value="stop recording"
          onClick={this.stopRecording}
        />

        <br/>

        <button
          value="Play"
          onclick={this.state.track.play}
        />
      </div>
    );
  }

});

module.exports = Recorder;
