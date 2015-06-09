'use strict';

var React = require('react');

//pet component
module.exports = React.createClass({
  render: function() {
    //data here is the pet object (single obj)
    return <li>Pet Name: {this.props.data.name}, Owner: {this.props.data.owner}, Weight: {this.props.data.weight}, Type: {this.props.data.type}</li>;
  }
});
