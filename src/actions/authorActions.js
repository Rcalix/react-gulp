"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var actionTypes = require('../constans/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            ActionTypes: actionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function (author) {
        var updateAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            ActionTypes: actionTypes.UPDATE_AUTHOR,
            author: updateAuthor
        });
    }

    
};

module.exports = AuthorActions;