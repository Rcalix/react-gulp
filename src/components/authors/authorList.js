"use strict";
var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorsList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    deleteAuthor: function(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Delted');
    },
    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    {/*<td><a href={"/#authors/" + author.id }>{author.id}</a></td>*/}
                    <td> <a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                    <td> <Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td> {author.firstName} {author.lastName} </td>
                </tr>
            );
        };
        return (
            <div>
                <h1>Authors </h1>
                <table className="table">
                    <thead>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});
module.exports = AuthorsList;