/** @jsx React.DOM */
var React = require('react');

// Needed for onTouchTap
// Can go away when react 1.0 release
// https://github.com/zilverline/react-tap-event-plugin
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var App = require('./App.js');
React.render(<App/>, document.body);