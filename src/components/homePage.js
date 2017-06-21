"use strict";
var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1> pluralsight administration </h1>
                <p>React, react Router, and flux for ultra-resposive web apps. </p>
            </div>
        );
    }
});

module.exports = Home;