/** @jsx React.DOM */
var React = require('react');

//var Alert = require('react-bootstrap').Alert;  
var  mui = require('material-ui');
var  RaisedButton = mui.RaisedButton; 

var App = React.createClass({
	render: function() {
		return (
			<h1><RaisedButton label="Default" />Hello world!</h1>
		);
	}
	
});
	
module.exports = App;
