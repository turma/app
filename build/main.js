(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

// Needed for onTouchTap
// Can go away when react 1.0 release
// https://github.com/zilverline/react-tap-event-plugin
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var App = require('./App.js');
React.render(React.createElement(App, null), document.body);
},{"./App.js":"/home/rafadev/go/src/github.com/turma/app/app/App.js","react":"react","react-tap-event-plugin":"/home/rafadev/go/src/github.com/turma/app/node_modules/react-tap-event-plugin/src/injectTapEventPlugin.js"}]