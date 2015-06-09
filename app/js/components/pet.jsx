'use strict';

var React = require('react');

//pet component
module.exports = React.createClass({
  render: function() {
    //data here is the pet object (single obj)
    return <li>{this.props.data}</li>;
  }
});
