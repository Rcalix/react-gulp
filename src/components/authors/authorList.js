"use strict";
var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorsList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },
    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    {/*<td><a href={"/#authors/" + author.id }>{author.id}</a></td>*/}
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