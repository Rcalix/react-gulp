"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseApi = require('../../api/courseApi');
// var AuthorStore = require('../../stores/authorStore');
// var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('leave without saving?')) {
                transition.abort();
            }
        }
    },
    getInitialState: function() {
        return {
            course: {id: '', title: '', category: '', length: ''},
            errors: {},
            dirty: false
        };
    },
    
    // componentWillMount: function () {
    //     var authorId = this.props.params.id;

    //     if (authorId) {
    //         this.setState(({author: AuthorStore.getAuthorById(authorId)}));
    //     }
    // },
    setCourseState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course});
    },
    validateNumber: function isInt(value) {
        console.log(value);
        return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
    },
    courseformIsValid: function () {
        var formIsValid = true;
        console.log(this.state.course);
        this.state.errors = {}; //clear any previus errors 
        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'Title must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.category.length < 3) {
            this.state.errors.category = 'category must be at least 3 characters.';
            formIsValid = false;
        }
          if (!this.validateNumber(this.state.course.length)) {
            this.state.errors.length = 'lenght must be at Intenger.';
            formIsValid = false;
        }
        console.log(this.validateNumber(this.state.course.length));
        this.setState({errors: this.state.errors});
        return formIsValid;
    },
    saveCourse: function(event) {
        event.preventDefault();
        if (!this.courseformIsValid()) {
            return;
        }
        // if (this.state.course.id) {
        //     AuthorActions.updateAuthor(this.state.author);
        // }
        // AuthorActions.createAuthor(this.state.author);

        console.log('load');
        CourseApi.saveCourse(this.state.course);
        this.setState({dirty: false});
        toastr.success('Author saved.');
        this.transitionTo('courses');
    },

    render: function() {
        return (
            <CourseForm 
                course={this.state.course}
                onChange={this.setCourseState} 
                onSave={this.saveCourse}
                errors={this.state.errors}/>
        );
    }
});

module.exports = ManageCoursePage;