var React = require('react');
var Key = require('./key');

var Organ = React.createClass({

  render: function () {
    var keys = this.props.tones.map(function (tone, idx) {
      return (<Key key={idx} noteName={tone}/>);
    });

    return (
      <div>
        <ul>
          {keys}
        </ul>
      </div>
    );
  }

});

module.exports = Organ;
