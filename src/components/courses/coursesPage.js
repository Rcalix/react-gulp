"use strict";
var React = require('react');
var Link = require('react-router').Link;
var CourseList = require('./courseList');
var courseApi = require('../../api/courseApi');

// var AuthorStore = require('../../stores/authorStore');
// var AuthorActions = require('../../actions/authorActions');

var Courses = React.createClass({
    getInitialState: function() {
       return {
              Courses: courseApi.getAllCourses()  
            };
    },

    // componentWillMount: function() {
    //   AuthorStore.addChangeListener(this._onChange);  
    // },
    // componentWillUnmount: function () {
    //     AuthorStore.removeChangeListener(this._onChange);
    // },
    // _onChange: function () {
    //     this.setState({authors: AuthorStore.getAllAuthors()});
    // },
    render: function() {
        return (
            <div>
                <h1>Courses hi new route</h1>
                <Link to="addCourse" className="btn btn-default">Add Courses</Link>
                <CourseList course={this.state.Courses}/>
            </div>
        );
    }
});
module.exports = Courses;