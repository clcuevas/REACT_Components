'use strict';

var React = require('react');
//get pet.jsx object since we're requiring it
var Pet = require('./pet.jsx');

module.exports = React.createClass({
  renderPets: function() {
    return this.props.data.map(function(pet) {
      return <Pet data={pet.name} key={pet._id} />;
    });
  },
  render: function() {
    //parenthesis allows you to send a multiple line statement
    return (
      <ul>
        {this.renderPets()}
      </ul>
    );
  }
});
