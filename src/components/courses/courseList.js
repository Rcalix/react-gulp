"use strict";
var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
// var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var CourseList = React.createClass({
    propTypes: {
        course: React.PropTypes.array.isRequired
    },

    // deleteAuthor: function(id, event) {
    //     event.preventDefault();
    //     AuthorActions.deleteAuthor(id);
    //     toastr.success('Author Delted');
    // },
    render: function() {
        var createCourseRow = function(course) {
            return (
                <tr key={course.id}>
                    {/*<td><a href={"/#authors/" + author.id }>{author.id}</a></td>*/}
                    {/*<td> <a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>*/}
                    <td> {course.id} </td>
                    <td> {course.title} </td>
                    <td> {course.category} </td>
                    <td> {course.length} </td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table">
                    <thead>
                        {/*<th></th>*/}
                        <th>ID</th>
                        <th>Title </th>
                        <th>Category </th>
                        <th>Length </th>
                    </thead>
                    <tbody>
                        {this.props.course.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});
module.exports = CourseList;