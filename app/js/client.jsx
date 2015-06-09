'use strict';

var React = require('react');

var App = React.createClass({
  render: function() {
    return <h1>{this.props.title}</h1>
  }
});

React.render(<App title="hello world" />, document.body);
