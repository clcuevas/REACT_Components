'use strict';

var React = require('react');
var PetList = require('./components/pets_list.jsx');
var request = require('superagent');

var App = React.createClass({
  getInitialState: function() {
    return {pets: [], title: 'Pets:'};
  },

  componentDidMount: function() {
    request
      .get('/api/pets')
      .end(function(err, res) {
        if (err) {
          return console.log(err);
        }
        //set state equal to res.body
        this.setState({pets: res.body});
      }.bind(this));
  },
  
  render: function() {
    return (
      <main>
        <h1>{this.state.title}</h1>
        <PetList data={this.state.pets} />
      </main>
    );
  }
});

React.render(<App />, document.getElementById('MyList'));
